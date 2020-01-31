import React, { Component } from "react";
import {FaCloudUploadAlt} from 'react-icons/fa'
import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styles";

export default class Upload extends Component {
  renderDragMessage = (isDragActive) => {

    if (!isDragActive) {
      return <UploadMessage> <FaCloudUploadAlt  color="#ddd" size={30}/>&nbsp; Arraste arquivos aqui...</UploadMessage>;
    }

    return <UploadMessage type="success"> Solte os arquivos aqui</UploadMessage>;
  };

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone  onDropAccepted={onUpload} accept='.pfx'>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}          
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}