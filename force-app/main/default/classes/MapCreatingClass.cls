public with sharing class MapCreatingClass {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [SELECT Id,Name,Description,BillingStreet,BillingCity,BillingState,BillingCountry,BillingPostalCode FROM Account ORDER BY Name LIMIT 10];
    }
}
