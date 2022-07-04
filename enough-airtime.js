function enoughAirtime(projectedUsage, availableAmount) {
    var call = 1.88;
    var sms = 0.75;
    var data = 12.00;
    let airtimeUsage = 0;
    var projectedAirtimeUsage = projectedUsage.split(',');
    
    for (var i = 0; i < projectedAirtimeUsage.length; i++) {
         if (projectedAirtimeUsage[i].startsWith('call')) {
                airtimeUsage += call;
            } else if (projectedAirtimeUsage[i].startsWith('sms')) {
                airtimeUsage += sms;
            } else if (projectedAirtimeUsage[i].startsWith('data')) {
                airtimeUsage += data;
            }
        }
  
    const sum = (airtimeUsage > availableAmount) ? 0 : availableAmount - airtimeUsage;
    return 'R' + sum.toFixed(2);
}