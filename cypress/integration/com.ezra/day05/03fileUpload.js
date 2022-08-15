describe('file upload', () => {
  it('uploading one file', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

    //TODO: FIRST WAY
    //* attachfile('path') -> attaches/uploads file with the given path
    cy.get('#filesToUpload').attachFile('wwdits.jpg');

    //TODO: SECOND WAY
    const path1 = 'wwdits.jpg';
    cy.get('#filesToUpload').attachFile(path1);

    cy.contains('wwdits.jpg').should('be.visible');
  });

  it('uploading multiple files', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

    //TODO FIRST WAY
    const path1 = 'wwdits.jpg';
    const path2 = 'wwditsa.png';
    const path3 = 'wwditsb.jpg';
    cy.get('#filesToUpload')
      .attachFile(path1)
      .wait(2000)
      .attachFile(path2)
      .wait(2000)
      .attachFile(path3);

    //TODO SECOND WAY
    cy.get('#filesToUpload').attachFile(path1, path2, path3);

    //TODO THIRD WAY
    cy.get('#filesToUpload').attachFile(
      'wwdits.jpg',
      'wwditsa.png',
      'wwditsb.jpg'
    );
  });

  it('overriding a file name', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    const path1 = 'wwdits.jpg';

    //* attachFile({filePath:'path', fileName: 'newName'}) -> changes the name of the given file
    cy.get('#filesToUpload').attachFile({
      filePath: path1,
      fileName: 'wwditsbaby.pdf',
    });

    cy.contains('wwditsbaby.pdf').should('be.visible');
  });
});
