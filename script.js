var app = new Vue(
    {
        el: '#root',
        data: {
            randomEmail: null,
            emailsList: []
        },
        methods: {

        },
        mounted() {
            // Richiedo una email random finche' la lunghezza di emailsList non raggiunge 10 elementi
            for(let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {

                    // Trasformo il valore di randomEmail nel dato che mi e' stato fornito
                    this.randomEmail = response.data.response;
                    // Pusho il dato nell'array emailsList
                    this.emailsList.push(this.randomEmail);
                });
            }
        }
    }
)

