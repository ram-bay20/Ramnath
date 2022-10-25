public with sharing class fetchAccountData {
    @AuraEnabled(cacheable=true)

    public static List<Account> getAccData() {
        return [SELECT Id,Name,Type,Industry from Account LIMIT 5];
    }
}
