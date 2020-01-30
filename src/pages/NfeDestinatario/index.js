import React, { Component } from 'react';
import {FaCloudUploadAlt, FaSignInAlt, FaCaretLeft} from 'react-icons/fa'
import { Card, Form, Col, Row, Nav} from 'react-bootstrap';
import FormData from 'form-data'
import axios from 'axios'
import { toast}  from 'react-toastify'
import { uniqueId } from "lodash"
import filesize from "filesize"
import Upload from '../../components/InputFile'
import {Container, SubmitButton, ButtonUpload, TextResult, BackButton, NavLink} from './styles'

export default class nfeDestinatario extends Component {
    state = {
        certificado: false,
        xmlEnvio: '',
        xmlRetorno: '',
        loading: false,
        password: 'speed051161',
        uploadedFiles: ''
    }

    handleSetCertificado = certificado =>{
        this.setState({
            certificado: certificado
        })
    }
    handleInputChange = event => {
        
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        });
    }

    handleSubmit = async e => {
        let url
        e.preventDefault()
        const { certificado, xmlEnvio, xmlRetorno, uploadedFiles, password } = this.state
        this.setState({loading: true})
        try{
            const form = new FormData();
            form.append('xmlEnvio', xmlEnvio);
            if(!certificado){                
                url ='http://localhost:3001/api/geraxmldestinatarionfe'
                form.append('xmlRetorno', xmlRetorno);
            }else{
                if(!uploadedFiles){
                    console.log('certificado não informado!')
                    return
                }
                url = 'http://localhost:3001/api/geraxmlconsultanfe'
                form.append('file', uploadedFiles);
                form.append('password', password);
            }
            
                    
            const response = await axios({
              method: 'post',
              url: url,
              data: form,
              headers: {
                'content-type': `multipart/form-data; boundary=${form._boundary}`,
              },
            });
            console.log(response.data)
            this.setState({
                xmlResult: response.data,
                loading: false
            })

        }catch(error){
            const { message } = error.response.data
            toast.error(message)                        

        }
    }
    handleBack = () =>{
        this.setState({xmlResult: ''})
    }
    handleFiles = e => {
        this.setState({file: e.target.files[0]})
    }
    handleUpload = files => {
        const uploaded= files.map(file => ({
          file,
          id: uniqueId(),
          name: file.name,
          readableSize: filesize(file.size),
          preview: URL.createObjectURL(file),
          progress: 0,
          uploaded: false,
          error: false,
          url: null
        }));
    
        this.setState({
          uploadedFiles: uploaded[0].file
        });


        console.log(uploaded)
    }

    render() {
        const {certificado, xmlResult} = this.state
        
        return (
        <Container>
            
            <Card>
                <Card.Header><h3>NFe - Gerar xml destinatário</h3></Card.Header>
                <Card.Body>
                    {!xmlResult ?                    
                    <Form onSubmit={this.handleSubmit}>
                            <p>Ferramenta utiliza para gerar xml de destinatário, utlizando o arquivo de envio e retorno
                            </p>
                            <a href="https://atendimento.tecnospeed.com.br/hc/pt-br/articles/360012436973-Gerar-o-XML-do-Destinat%C3%A1rio">
                                Clique aqui para acessar a documentação do método utilizado.</a><br/><br/>
                            <Form.Group controlId="Formtext">                                                         
                                <Row>
                                    <Col sm="6">
                                        <Card>
                                            <Card.Header>
                                                Informe aqui o xml de envio
                                            </Card.Header>
                                            <Card.Body>
                                            <Form.Control 
                                                name="xmlEnvio"
                                                placeholder="Insira aqui o texto do xml..." 
                                                as="textarea" 
                                                rows="15" 
                                                onChange={this.handleInputChange}
                                            />        
                                            </Card.Body>
                                            
                                        </ Card>
                                    </Col>
                                    <Col sm="6">

                                        <Card>
                                        <Card.Header>
                                            <Nav variant="tabs" defaultActiveKey="#first" style={{height: 40}}>
                                                <Nav.Item >
                                                    <NavLink onClick={() => this.handleSetCertificado(false)} >Utilizar xml retorno</NavLink>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <NavLink onClick={() => this.handleSetCertificado(true)}>Certificado digital</NavLink>
                                                </Nav.Item>
                                            </Nav>
                                        </Card.Header>
                                        { certificado ? 
                                        <Card.Body>
                                            <Card.Title>Certificado digital</Card.Title>
                                            <Card.Text>
                                            Para gerar o xml destinatário com o certificado digital, é necessário 
                                            anexar o arquivo .pfx do certificado, para que possa ser realizado a consulta
                                            da  nota fiscal diretamente no webservice do Sefaz.
                                            </Card.Text>
                                            <Upload onUpload={this.handleUpload} />                                           
                                        </Card.Body>
                                        :
                                        <Card.Body>
                                            <Form.Control 
                                                name="xmlRetorno"
                                                placeholder="Insira aqui o texto do xml..." 
                                                as="textarea" 
                                                rows="15" 
                                                onChange={this.handleInputChange}
                                            />
                                            
                                        </Card.Body>
                                        }
                                        </Card>                                                                                                                            
                                    </Col>
                                    <SubmitButton >
                                    <FaSignInAlt color="#fff" size={24}/>
                                    &nbsp;&nbsp;Gerar xml destinatário
                                    </SubmitButton>
                                </Row>                                

                            </Form.Group>
                                        
                    </Form>
                    :        
                    <>
                    <BackButton onClick={()=> this.handleBack()}>
                        <FaCaretLeft color="black" size={25}/>
                        &nbsp;&nbsp;voltar
                    </BackButton>            
                    <TextResult readOnly row="40" name="xmlResult" value={xmlResult}></TextResult>
                    </>
                }
                </Card.Body>
            </Card> 
        </Container>
    );

  }
}
