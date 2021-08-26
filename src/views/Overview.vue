<template>
  <div class="body_container">
    <div class="white_box">
      <p>Outgoing payments <small>(for 2021)</small></p>
    </div>

    <div class="white_box mt-4">
      <div class="d-flex">
        <p class="mr-auto mb-0">My transaction</p>
        <router-link to="/transaction" exact
          >See All <i class="fa fa-angle-right"></i
        ></router-link>
      </div>
      <div class="table_content py-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Date</th>
              <th scope="col">ReferenceID</th>
              <th scope="col">Beneficiary</th>
              <th scope="col">Remarks</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-top-0 border-bottom"
              v-for="transaction in transactions"
              :key="transaction"
            >
              <td scope="row" class="border-top-0">
                <img src="../assets/wallet.svg" alt="#" class="mr-2" />
              </td>
              <td class="border-top-0">{{ transaction.date }}</td>
              <td class="border-top-0 id">{{ transaction.referenceId }}</td>
              <td class="border-top-0">
                <div>
                  <p>{{ transaction.beneficiary_name }}</p>
                  <small class="bank">{{ transaction.beneficiary_bank }}</small>
                </div>
              </td>
              <td class="border-top-0 remark">{{ transaction.remarks }}</td>
              <td class="border-top-0">{{ transaction.amount }}</td>
              <td class="border-top-0" v-bind:style="{ color: getcolorfromstatus() }">
                {{ transaction.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getColor: null,
      transactions: [
        {
          date: "28/08/20",
          referenceId: "11232346322",
          beneficiary_name: "Sarah Bright",
          beneficiary_bank: "GTB-0229345434",
          remarks: "Laundry",
          amount: "10,000",
          status: "Pending",
        },
        {
          date: "28/08/20",
          referenceId: "11232346322",
          beneficiary_name: "Floyd Miles",
          beneficiary_bank: "GTB-0229345434",
          remarks: "Airtime",
          amount: "10,000",
          status: "Completed",
        },
        {
          date: "28/08/20",
          referenceId: "11232346322",
          beneficiary_name: "Sarah Nguyen",
          beneficiary_bank: "GTB-0229345434",
          remarks: "Laundry",
          amount: "10,000",
          status: "Failed",
        },
        {
          date: "28/08/20",
          referenceId: "11232346322",
          beneficiary_name: "Esther Howard",
          beneficiary_bank: "GTB-0229345434",
          remarks: "-",
          amount: "10,000",
          status: "Pending",
        },
        {
          date: "28/08/20",
          referenceId: "11232346322",
          beneficiary_name: "Jenny Wilson",
          beneficiary_bank: "GTB-0229345434",
          remarks: "Refund for...",
          amount: "10,000",
          status: "Pending",
        },
      ],
    };
  },
  methods: {
    getcolorfromstatus: function () {
      let trans = this.transactions;
      for (let i = 0; i < this.transactions.length; i++) {
        if (trans[i].status === "Completed") {
          return "green";
        }else if (trans[i].status === "Pending") {
            return "black";
        }
        else if (trans[i].status === "Failed") {
          return "orange"
        }
      }
    },
  },
  created() {
    this.getcolorfromstatus();
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.white_box {
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 2.5%;
  font-family: Nunito;
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #1e1e2f;
  }
  .table_content {
    .table {
      p {
        margin-bottom: 0;
        font-size: 16px;
        line-height: 22px;
        color: #9fa2b8;
      }
      thead {
        th {
          border-bottom: none !important;
          padding: 5% 0 1% 0%;
          font-family: Nunito;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 22px;
          color: #626577;
        }
      }
      td {
        font-style: normal;
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        color: #9fa2b8;
        padding: 30px 0 20px 0;
      }
      .id {
        color: #003380;
      }
      .bank,
      .remark {
        font-weight: normal;
      }
    }
  }
}
</style>