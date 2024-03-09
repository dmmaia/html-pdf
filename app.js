function generatePDF() {
    let pdfContent = document.getElementById('frame-content').contentWindow;
    pdfContent.focus()
    pdfContent.print()
}