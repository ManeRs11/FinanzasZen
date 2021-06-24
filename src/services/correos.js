import axios from 'axios'

export default {
    apartado () {
        return axios.create({
            baseURL: 'https://api.sendgrid.com/v3/mail',
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Allow': 'POST, HEAD'
            }
        })
        .post('/send', {
            from:{
                'email':'contacto@finanzaszen.com',
                'template_id':'[d-abdc66ff0c884cdda9364be36838bac8]'
            },
            personalizations:[
                {
                    to:[
                        {
                            "email":"maners.011@gmail.com"
                        }
                    ]
                }
            ]
        })
        .catch(e => {
            console.log('error: ', e)
        })
    }
}
