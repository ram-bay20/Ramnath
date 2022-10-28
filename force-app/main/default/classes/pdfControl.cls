public with sharing class pdfControl {
    @AuraEnabled
    public static Attachment generatePDF(Id recordId,String htmlData){
        Pagereference pade = Page.convertToPDF;
        pade.getParameters().put('pdfText', htmlData);

        Contact cont = new Contact(Id = recordId);
        Attachment objAttachment = new Attachment();
        objAttachment.Name = 'marvel.pdf';
        objAttachment.ParentId = cont.Id;
        objAttachment.Body = pade.getContentaspdf();
        objAttachment.IsPrivate = false;
        insert objAttachment;
        return objAttachment;
    }
}
