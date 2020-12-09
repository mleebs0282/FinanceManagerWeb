<template>
    <v-container>
        <v-row no-gutters v-for="bill in bills.bills" :key="bill.id" style="height: 60px;">
            <v-col lg="3">
                {{ bill.payee }}
            </v-col>
            <v-col sm="1">
                {{ bill.dayDue }}
            </v-col>
            <v-col sm="1">
                {{ bill.amountDue }}
            </v-col>
            <v-col sm="1">
                {{ bill.balance }}
            </v-col>
            <v-col md="1">
                {{ bill.type }}
            </v-col>
            <v-col md="1">
                <a :href="bill.website.location" target="_blank">Website</a>
            </v-col>
            <v-col md="2">
                <v-btn @click="copyValue(bill.website.login.username)">
                    Copy username
                </v-btn>
            </v-col>
            <v-col md="2">
                <v-btn @click="copyValue(bill.website.login.password)">
                    Copy Password
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import BillService from "../services/bill-service";

export default {
    name: 'Bills',
    data() {
        return {
            bills: []
        }
    },
    methods: {
        copyValue: function (value) {
            var textbox = document.createElement("textarea");
            document.body.appendChild(textbox);
            textbox.value = value;
            textbox.select();
            document.execCommand("copy");
            document.body.removeChild(textbox);
        }
    },
    mounted() {
        BillService.getAll()
        .then(response => {
            this.bills = response.data;
        })
    }
}
</script>