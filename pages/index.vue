<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
      <h1 class="headline mb-3" style="letter-spacing: 2px !important;">PhoneFinder</h1>
      <v-card>
        <v-card-title class="subheading">Введите номер абонента</v-card-title>
        <v-card-text>
          <v-text-field
            ref="phone"
            v-model="phone"
            :counter="10"
            label="Номер"
            prepend-icon="phone"
            @click:append="clear"
            append-icon="close"
            mask="phone"
            required
            @keydown.enter="submit"
            @keydown.esc="clear"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!formIsValid"
            @click="submit"
            color="primary"
          >
            Найти
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-dialog
      @keydown.esc="createFalseDialog=false"
      @keydown.enter="createFalseDialog=false"
      v-model="createFalseDialog"
      max-width="320"
    >
      <v-card>
        <v-card-title class="subheading">Абонент не найден</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="createFalseDialog=false"
          >
            Ок
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      @keydown.esc="createFalseDialog=false"
      @keydown.enter="openLink(secretPlace)"
      v-model="createTrueDialog"
      max-width="320"
    >
      <v-card>
        <v-card-title class="subheading">{{ secretMessage }}</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            @click="openLink(secretPlace)"
          >
            Карта
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      phone: '',
      createFalseDialog: false,
      createTrueDialog: false,
      secretNumber: '0731145621',
      secretPlace: 'https://goo.gl/maps/Wyp7Zfb7AAt',
      secretMessage: 'Сигнал обнаружен на втором этаже'
    }),
    computed: {
      formIsValid () {
        return this.phone !== ''
      }
    },
    methods: {
      submit () {
        if (this.phone !== this.secretNumber) {
          this.createFalseDialog = true
        } else {
          this.createTrueDialog = true
        }
      },
      clear () {
        this.$refs.phone.reset()
      },
      openLink: function (url) {
        window.open(url, '_blank')
      }
    }
  }
</script>

<style>
</style>
