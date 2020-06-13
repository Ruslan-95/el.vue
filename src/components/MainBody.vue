<template>
  <v-content>
    <section id="hero">
      <v-row no-gutters>
        <v-img
          :min-height="'calc(50vh - ' + $vuetify.application.top + 'px)'"
          :max-height="'calc(80vh - ' + $vuetify.application.top + 'px)'"
          src="https://images.unsplash.com/photo-1592040300223-5e9e3e3a94e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text text-center"
                  cols="12"
                  tag="h1"
                >
                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      Ваш юрист
                    </span>

                  <br>

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >
                      Элтун Кяримов
                    </span>

                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$vuetify.goTo('#about-me')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section id="stats" class="stats">
      <div class="containers">
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col
              v-for="[value, title] of stats"
              :key="title"
              cols="12"
              md="3"
            >
              <div class="text-center">
                <div
                  class="display-3 font-weight-black mb-4"
                  v-text="value"
                ></div>

                <div
                  class="title font-weight-regular text-uppercase"
                  v-text="title"
                ></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <section id="about-me" class="about-me grey lighten-4">
        <v-parallax
          class="about-me__parallax"
          :height="$vuetify.breakpoint.smAndDown ? 700 : 1000"
          src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" >
          <v-container class="text-center grey lighten-3 py-10">

        <h2 class="display-2 font-weight-bold mb-3">Обо мне</h2>

        <v-responsive
          class="mx-auto mb-8"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-responsive>
          <p> Рад приветствовать Вас на своём сайте!
          </p>
          <p>Меня зовут Кяримов Эльтун, веду юридическую деятельность уже более 10 лет. Являюсь выпускником Московской Государственной Юридической Академии им. О.Е. Кутафина.
          </p>
          <p>Свою карьеру я начинал ещё будучи помощником адвоката в юридической фирме. С тех пор работал на должности юриста в крупнейших компаниях разных сфер деятельности. Такой опыт, безусловно, дал возможность оказывать услуги с выбором наиболее продуктивных тактик и способов защиты на всех стадиях судопроизводства.
          </p>
          <p>Среди моих клиентов есть государственные учреждения, политические партии, а так же успешные, современные и технически развитые компании из различных отраслей бизнеса.
          </p>
          <p>В своей работе я всегда ориентируюсь на высокий уровень клиентского обслуживания, которое включает в себя быстрый и эффективный результат с максимальной выгодой для клиента.
          </p>
          <p>Важно понимать, что неверный выбор юриста и стратегии может отсрочить решение Вашего вопроса на долгие месяцы, и, быть может, годы. Поэтому для меня являются принципиальными скорость и качество предоставляемых услуг.
          </p>
          <p>Если Вы не можете решить Вашу проблему самостоятельно, или сомневаетесь в возможности её решения, буду рад Вам помочь.
          </p>
        </v-responsive>

        <div></div>

        <v-btn
          color="grey"
          href="/"
          outlined
          large
        >
            <span class="grey--text text--darken-1 font-weight-bold">
              Подробнее
            </span>
        </v-btn>
      </v-container>
      </v-parallax>
    </section>

    <section id="features" class="">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3 ">Отзывы</h2>

        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col
            v-for="({ icon, title, text }, i) in features"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="py-12 px-4"
              color="grey lighten-3"
              flat
            >
              <v-theme-provider dark>
                <div>
                  <v-avatar
                    color="primary"
                    size="88"
                  >
                    <v-icon
                      large
                      v-text="icon"
                    ></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                class="justify-center font-weight-black text-uppercase"
                v-text="title"
              ></v-card-title>

              <v-card-text
                class="subtitle-1"
                v-text="text"
              >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>

    <section id="blog">
      <div class="py-12"></div>

      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Разделы</h2>

        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col
            v-for="({ src, text, title }, i) in articles"
            :key="i"
            cols="12"
            md="4"
          >
            <v-img
              :src="src"
              class="mb-4"
              height="275"
              max-width="100%"
            ></v-img>

            <h3
              class="font-weight-black mb-4 text-uppercase"
              v-text="title"
            ></h3>

            <div
              class="title font-weight-light mb-5"
              v-text="text"
            ></div>

            <v-btn
              class="ml-n4 font-weight-black"
              text
            >
              Читать
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>

  </v-content>
</template>

<script>
export default {
  name: 'MainBody',
  data () {
    return {
      articles: [
        {
          src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Банкротство',
          text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.'
        },
        {
          src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Гражданские тырыпыры',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.'
        },
        {
          src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
          title: 'И еще ',
          text: 'excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam.'
        }
      ],
      features: [
        {
          icon: 'mdi-account-group-outline',
          title: 'Ваня',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'
        },
        {
          icon: 'mdi-update',
          title: 'Петя',
          text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.'
        },
        {
          icon: 'mdi-shield-outline',
          title: 'Леша',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'
        }
      ],
      stats: [
        ['500', 'Выигранных дел'],
        ['330+', 'Довольных клиентов'],
        ['1m', 'Долларов сэкономленно'],
        ['5', 'Офисов по Москве']
      ]
    }
  }
}
</script>

<style scoped type="text/css" lang="scss">
  .hero {

  }

  .about-me {
  h2 {
    color: #000000;
  }

  p {
    text-align: justify;
  }
  }

  .features {

  }

  .stats {
    filter: blur(5px);
    min-height: 550px;
    background-image: url("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=10000") ;
  }

  .blog {

  }
</style>
