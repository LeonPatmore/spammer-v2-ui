<template>
    <div>
        <v-container>
            <v-row dense>
                <v-col cols="12" v-for="client in clients" :key="client.uuid">
                    <v-card>
                        <v-card-title class="headlines" v-text="client.uuid" />
                        <v-card-text
                            >Uuid: {{ client.uuid }} <br />
                            Available: {{ client.available }} <br />
                            Status: {{ client.status }} <br />
                            Last Update: {{ client.lastUpdate }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'clients',
    data: () => ({
        clients: null,
    }),

    mounted() {
        fetch('http://localhost:5435/v1/clients')
            .then(response => response.json())
            .then(result => {
                this.clients = result.clients;
            });
    },
};
</script>

<style></style>
