<template>
  <v-content>
    <v-card-actions>
      <v-layout justify-center>
        <img :src="qr" alt="">
      </v-layout>
    </v-card-actions>
    <v-card-actions>
      <v-layout justify-center>
        Scan the QR-Code and enter the code you see below
      </v-layout>
    </v-card-actions>
    <v-card-actions>
      <v-text-field
          v-model="code"
          :counter="6"
          fluid
          hint="Something like: 123456"
          label="Code"
          required
      ></v-text-field>
    </v-card-actions>
  </v-content>
</template>

<script>
    export default {
      name: 'TotpSetup',
      data () {
        return {
          qr: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAEJCAAAAACiA424AAAD3klEQVR42u3cwW4iMRAEUP7/p5PDHlaKGFPV9ihEPE5syA7jh+Ruyq08vjz+PR4ISJAgQYIECRIkSJAgQYIECRIkSJD4SxKP149nv/f/Z5fX+/Gz9J+X7/bsf6R3T4IECRLHJK432Sc3nd7bel2BbPor6d2TIEGCxDGJqjpcXiCoIsPCELx5cPckSJAgcb/EeusP+unLi6Y9dnApEiRIkHgfibQXTwOE4Mr9J0WCBAkS90sETmkr3aey6wv0CQQJEiRI3CVR7fBv9+w3TgNJkCDxkRLxaNLs3de1Y731B/nEdDEkSJAgMZHoj6HWyWpVlYJI+MxVSJAgQeKERJBFVNv3Ts8eGAcRRlBZSJAgQeKERHpSVeWu6Xl/WrhSMRIkSJC4QaJH2Fl/P541LCCDbpsECRIkIom+MKTZRh9/VJFw+jWBBAkSJO6SSNvhoCakach6tDWtRVtTAyRIkCBRdtvVef9w/WlwMVQ8lE+QIEGCxOQ+0r42zWf7WYE0fJh22yRIkCAxTnSrjKFPb/vDrPVtVHWMBAkSJDYldhrZ/mwrXc32x0CCBAkSN0ik5/PrtGFrS399+eFnQYIECRLHcsy0ngRH80Hj3pv00cSgdpAgQYJE2W1X4Wu6hweDrztzAelILQkSJEhsSuysMBg7CNrmdOlpG06CBAkS90ukq6nmDIJnffJb3RUJEiRI3CWR3mXaY/fR7DB3qC5FggQJEnOJPhNId/0+n9i+v61smwQJEiQiibSUpLt0lWOs15AemO1PDZAgQYLEXj4RTKtWzXKaMVSX6uxIkCBBYk9ieC6WXjTIXXc66y5OIUGCBImvrW47PbivnqUv9PnEuoTdndSQIEHiIyXS3nnYJ6+NU/cU4dCMLgkSJEhMJlOHc6HBhFTwajqA2qccJEiQIDGSSO8oSBbSdaV9dzWt1eUnJEiQIDGR2J7br070D64//cxIkCBB4uzfx0wP6YNVpydVfT5bfTmYJrokSJAgUUpUSe3pWdbTKS8JEiRInJUI9txg3imtIlXy8SJoaGavSJAgQWJTImhfg2Y5mHeqhrfS1CRtr0mQIEHihETfgffDBkE5qAYVqpSXBAkSJI5JVJt7tUFXtSh9NS05JEiQIHGXRFox+syiijDSLwJphLE1y0+CBAkS+blTdbZfpRc752dpNDGYGiBBggSJUxLrNwnSgXQkKl1mVYZIkCBB4rcl+sw2SCWqIpBmwCRIkCBxVqKfKRgmusMQeTjuSoIECRJnJc4ECFUTnE6SphNc6XQBCRIkSMwlPvJBggQJEiRIkCBBggQJEiRIkCBBggSJd318Ax8lF2mRI7xFAAAAAElFTkSuQmCC'
        }
      },
      methods: {
        setQr: function (qr) {
          this.qr = qr
        }
      }
    }
</script>

<style scoped>

</style>
