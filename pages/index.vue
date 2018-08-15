<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card>
          <v-card-title class="headline">Оп-оп, фраерок, введика номерок</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              :counter="10"
              label="Номерок"
              prepend-icon="phone"
              mask="phone"
              required
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="clear"
            >
              Очистить
            </v-btn>
            <v-btn
              :disabled="!formIsValid"
              @click="submit"
              color="primary"
            >
              Отправить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-flex>

    <v-dialog
      v-model="createFalseDialog"
      max-width="320"
    >
      <v-card>
        <v-card-title class="headline">Не, не тот</v-card-title>
        <v-card-text>
          <img
            class="rulon-deploev"
            src="https://sentimony.com/rulon-deploev.jpg"
            alt="Rulon Deploev"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="createFalseDialog=false"
          >
            Заново
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="createTrueDialog"
      max-width="320"
    >
      <v-card>
        <v-card-title class="headline">По красоте!</v-card-title>
        <v-card-text>
          <img
            class="wild-dance"
            src="https://content.sentimony.com/assets/img/gifs/wild-dance.gif"
            alt="Wild Dance"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            @click="openLink(secretPlace)"
          >
            Держи карту
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      phone: '',
      phoneRules: [
        v => !!v || 'Номерок необходим',
        v => (v && v.length <= 10) || 'Номерок у нас из 10 цифр'
      ],
      createFalseDialog: false,
      createTrueDialog: false,
      secretNumber: '0731145621',
      secretPlace: 'https://goo.gl/maps/mNp1zHtN4kp'
    }),
    computed: {
      formIsValid () {
        return this.phone !== ''
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate() && this.phone !== this.secretNumber) {
          this.createFalseDialog = true
        } else {
          this.createTrueDialog = true
        }
      },
      clear () {
        this.$refs.form.reset()
      },
      openLink: function (url) {
        window.open(url, '_blank')
      }
    }
  }
</script>

<style>
  img.wild-dance {
    width: 100%;
    height: auto;
    display: block;
  }
  img.rulon-deploev {
    display: block;
  }
</style>
