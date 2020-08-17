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
    computed: {
        clients() {
            return this.$store.state.clients;
        },
    },
    serverPrefetch() {
        return this.fetchClients();
    },
    mounted() {
        if (!this.clients) return this.fetchClients();
    },
    methods: {
        fetchClients() {
            return this.$store.dispatch('fetchClients');
        },
    },
};
</script>

<style></style>
