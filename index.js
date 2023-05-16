const axios = require('axios')

async function callSales(cpf){
  var data = JSON.stringify({
    "compositeRequest": [
        {
            "body": {
                "Parent": {
                    "CNPJ__c": "00.000.000/0000-00" 
                }
            },
            "method": "PATCH",
            "url": `/services/data/v43.0/sobjects/Account/CPF__c/${cpf}`,
            "referenceId": "Conta1"
        }
    ]
})
  
  var config = {
    method: 'post',
    url: 'https://q-saude.my.salesforce.com/services/data/v45.0/composite',
    headers: { 
      'Authorization': `Bearer token`, 
      'Content-Type': '', 
      'Cookie': ''
    },
    data : data
  }
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })
}

async function main(){
    const cpfs = [
      '000.000.000-00'
    ]

    for (let i = 0; i < cpfs.length; i++) {
        const b = await callSales(cpfs [i])
        console.log(i)
    }
}
main()