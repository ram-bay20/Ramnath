public with sharing class CSVcontroller {
    @AuraEnabled(cacheable=true)
    public static List<Account> generateCSV(){
        return [SELECT Id,Name,Phone,Industry,AnnualRevenue FROM Account];
    }
}
