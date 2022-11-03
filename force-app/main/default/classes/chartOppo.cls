public with sharing class chartOppo {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOppo(){
        return [SELECT StageName FROM Opportunity];
    }
}
