function totalPhoneBill(phone) {
    var record = phone.split(', ');
    let bill = 0;
    const call = 2.75;
    const sms = 0.65;
    
    for (i= 0; i<record.length; i++) {
      if (record[i] === 'call') {
        bill = bill + call;}
      else
        bill = bill + sms;
    }
  console.log('R' + bill.toFixed(2));
      return 'R' + bill.toFixed(2); 
          }