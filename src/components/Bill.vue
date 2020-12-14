<template>
<div>
    <h2>{{bill.bill.payee}} Bill Details</h2>
    <div class="bill-details">
        <div>
            <label>Payee:</label>
            <input v-if="isInEditMode" v-model="bill.bill.payee">
            <label v-else>{{bill.bill.payee}}</label>
        </div>
        <div>
            <label>Day Due:</label>
            <input v-if="isInEditMode" v-model.number="bill.bill.dayDue">
            <label v-else>{{bill.bill.dayDue}}</label>
        </div>
        <div>
            <label>Amount Due:</label>
            <input v-if="isInEditMode" v-model.number="bill.bill.amountDue">
            <label v-else>{{bill.bill.amountDue}}</label>
        </div>
        <div>
            <label>Balance:</label>
            <input v-if="isInEditMode" v-model.number="bill.bill.balance">
            <label v-else>{{bill.bill.balance}}</label>
        </div>
        <div>
            <label>Type:</label>
            <input v-if="isInEditMode" v-model="bill.bill.type">
            <label v-else>{{bill.bill.type}}</label>
        </div>
        <div>
            <label>Location:</label>
            <input v-if="isInEditMode" v-model="bill.bill.website.location">
            <label v-else>{{bill.bill.website.location}}</label>
        </div>
        <div>
            <label>Username:</label>
            <input v-if="isInEditMode" v-model="bill.bill.website.login.username">
            <label v-else>{{bill.bill.website.login.username}}</label>
        </div>
        <div>
            <label>Password:</label>
            <input v-if="isInEditMode" v-model="bill.bill.website.login.password">
        </div>
    </div>

    <v-btn v-if="!isInEditMode" @click="isInEditMode=true;">Edit</v-btn>
    <v-btn v-if="isInEditMode" @click="updateBill()">Save</v-btn>
    <v-btn v-if="isInEditMode" @click="isInEditMode=false;">Cancel</v-btn>
</div>
</template>

<script>
import BillService from "../services/bill-service";

export default {
    name: 'Bill',
    data() {
        return {
            bill: {
                bill: {
                    website: {
                        login: {}
                    }
                }
            },
            editedBill: {
                bill: {
                    website: {
                        login: {}
                    }
                }
            },
            isInEditMode: false
        }
    },
    methods: {
        updateBill: function() {
            BillService.update(this.bill.bill.id, this.bill);
            this.isInEditMode = false;
        }
    },
    directives: {
        focus: {
            inserted (el) {
                el.focus()
            }
        }
    },
    mounted() {
        BillService.get(this.$route.query.id)
        .then(response => {
            this.bill = response.data;
        })
    }
}
</script>
<style>
    .bill-details {
        padding-bottom: 30px;
    }
    label {
        min-width: 100px;
        display: inline-block;
    }
</style>