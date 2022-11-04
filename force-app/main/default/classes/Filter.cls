public with sharing class Filter {
    @AuraEnabled(cacheable=true)
    public static List<Contact> filterContact(){
        return [SELECT Id,Name,Email,Title FROM Contact];
    }
}
