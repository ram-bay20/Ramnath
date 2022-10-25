public with sharing class fetchAccountData {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccData() {
        return [SELECT Id,Name,Type,Industry from Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountType(String type) {
        return [SELECT Id,Name,Type,Industry from Account WHERE Type=:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccount(String search) {
        String key = '%'+search+'%';
        return [SELECT Id,Name,Type,Industry from Account WHERE Name LIKE:key LIMIT 5];
    }
}
