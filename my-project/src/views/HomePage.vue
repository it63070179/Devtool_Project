<template>
  <div>
    <NavBar />
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="carousel__item">
          <img :src="slide.image" />
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>

<br>
<br>
    <section class="container">
      <div
        class="columns features"
        style="display: flex; justify-content: center; align-items: center"
      >
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="../assets/schedule.jpg"
                  class="modal-button"
                  data-target="modal-image4"
                />
              </figure>
            </div>
            <div
              class="card-content modal-button"
              data-target="modal-card2"
              @click="toggleModal"
            >
              <div class="content">
                <h3 style="text-align: center; font-weight: bold">Schedule</h3>
                <h4>
                  ตารางเรียนในแต่ละวิชาของเด็กๆ ผู้ปกครองสามารถคลิกเข้ามาดูรายละเอียดตารางเรียนแต่ละวิชาของเด็กๆได้ที่นี่
                </h4>
                <br>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4" @click="toggleModal" data-target="modal-card">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="../assets/baby.jpg"
                  alt="Placeholder image"
                  class="modal-button"
                  data-target="modal-image2"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h3 style="text-align: center; font-weight: bold">
                  Class Study
                </h3>
                <h4>
                  รูปภาพบรรยากาศเด็กๆ ที่เรียนหนังสือภายในห้องเรียน
                  และนอกสถานที่ ให้ผู้ปกครองได้ดูในแต่ละวันเด็กๆ
                  ได้ศึกษาอะไรบ้าง
                </h4>
                <br>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="../assets/activity.png"
                  class="modal-button"
                  data-target="modal-image4"
                />
              </figure>
            </div>
            <div
              class="card-content modal-button"
              data-target="modal-card2"
              @click="toggleModal"
            >
              <div class="content">
                <h3 style="text-align: center; font-weight: bold">Activity</h3>
                <h4>
                  รูปภาพเกี่ยวกับกิจกรรมของเด็กๆ
                  ให้ผู้ปกครองได้ดูกิจกรรมในแต่ละวันที่เด็กๆทำ
                  ซึ่งกิจกรรมเหล่านั้นช่วยเสริมสร้างสุขภาพ
                  ความรู้ด้านต่างๆให้กับเด็กๆ
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="../assets/warn.png"
                  class="modal-button"
                  data-target="modal-image4"
                />
              </figure>
            </div>
            <div
              class="card-content modal-button"
              data-target="modal-card2"
              @click="toggleModal"
            >
              <div class="content">
                <h3 style="text-align: center; font-weight: bold">Other events</h3>
                <h4>
                  กิจกรรมอื่นๆ หรือ เหตุการณ์อื่นๆที่เกิดขึ้นกับเด็กๆ จะแจ้งเหตุให้กับผู้ปกครองได้ทราบ <br><br><br>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  ===============
    HERE BE MODALS
    ===============  -->
    <!-- 3dFlipVertical card tiny -->
    <div
      id="modal-card"
      class="modal modal-fx-3dSlit"
      :class="{ 'is-active': isActive }"
      @click="toggleModal"
    >
      <div class="modal-background"></div>
      <div class="modal-content is-tiny">
        <!-- content -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://source.unsplash.com/6Ticnhs1AG0"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                    alt="linda barret avatar"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Jane Doe</p>
                <p class="subtitle is-6">@jane_doe</p>
              </div>
            </div>
            <div class="content">
              Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm
              tellin' you way up north bookin' it can't get theyah from heeyah
              native bean suppah whawf Powrtland Museum of Aht, back woods
              hawsun around the pit mummah Yessah, mummah muckle riyht on'ta her
              Bean's dinnahbucket bub geez bud sumpin' fierce ayuhpawt Bangah
              naw, Powrtland Museum of Aht down cellah sumpin' fierce hoppa bub
              If you can't stand the wintah you don't deserve the summah slower
              than molasses going uphill in January. Sgn'wahl shoggor hrii uaaah
              R'lyeh uh'e k'yarnak Hastur hupadgh li'hee, hai f'nilgh'ri
              nilgh'ri n'ghftor ngftaghu vulgtlagln h'hrii throd Nyarlathotep
              lloig, naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog
              cehye. Zhro y'hah nogoth phlegeth stell'bsna orr'e ph'Hastur
              gnaiih throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg
              nakadishtu chlirgh hupadgh tharanak h'gnaiih.
              <a>@bulmaio</a>.
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time datetime="2018-02-02">12:45 AM - 20 June 2018</time>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://source.unsplash.com/6Ticnhs1AG0"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                    alt="linda barret avatar"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Jane Doe</p>
                <p class="subtitle is-6">@jane_doe</p>
              </div>
            </div>
            <div class="content">
              Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm
              tellin' you way up north bookin' it can't get theyah from heeyah
              native bean suppah whawf Powrtland Museum of Aht, back woods
              hawsun around the pit mummah Yessah, mummah muckle riyht on'ta her
              Bean's dinnahbucket bub geez bud sumpin' fierce ayuhpawt Bangah
              naw, Powrtland Museum of Aht down cellah sumpin' fierce hoppa bub
              If you can't stand the wintah you don't deserve the summah slower
              than molasses going uphill in January. Sgn'wahl shoggor hrii uaaah
              R'lyeh uh'e k'yarnak Hastur hupadgh li'hee, hai f'nilgh'ri
              nilgh'ri n'ghftor ngftaghu vulgtlagln h'hrii throd Nyarlathotep
              lloig, naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog
              cehye. Zhro y'hah nogoth phlegeth stell'bsna orr'e ph'Hastur
              gnaiih throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg
              nakadishtu chlirgh hupadgh tharanak h'gnaiih.
              <a>@bulmaio</a>.
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time datetime="2018-02-02">12:45 AM - 20 June 2018</time>
            </div>
          </div>
        </div>
        <!-- end content -->
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    <!-- end tiny modal card -->
    <!-- 3dFlipVertical card tiny [butterfly] -->
    <div
      id="modal-card2"
      class="modal modal-fx-3dSlit"
      :class="{ 'is-active': isActive }"
      @click="toggleModal"
    >
      <div class="modal-background"></div>
      <div class="modal-content is-tiny">
        <!-- content -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://source.unsplash.com/hLyd1LukQ7E"
                alt="butterfly"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                    alt="linda barret avatar"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Jane Doe</p>
                <p class="subtitle is-6">@jane_doe</p>
              </div>
            </div>
            <div class="content">
              Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm
              tellin' you way up north bookin' it can't get theyah from heeyah
              native bean suppah whawf Powrtland Museum of Aht, back woods
              hawsun around the pit mummah Yessah, mummah muckle riyht on'ta her
              Bean's dinnahbucket bub geez bud sumpin' fierce ayuhpawt Bangah
              naw, Powrtland Museum of Aht down cellah sumpin' fierce hoppa bub
              If you can't stand the wintah you don't deserve the summah slower
              than molasses going uphill in January. Sgn'wahl shoggor hrii uaaah
              R'lyeh uh'e k'yarnak Hastur hupadgh li'hee, hai f'nilgh'ri
              nilgh'ri n'ghftor ngftaghu vulgtlagln h'hrii throd Nyarlathotep
              lloig, naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog
              cehye. Zhro y'hah nogoth phlegeth stell'bsna orr'e ph'Hastur
              gnaiih throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg
              nakadishtu chlirgh hupadgh tharanak h'gnaiih.
              <a>@bulmaio</a>.
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time datetime="2018-02-02">12:45 AM - 20 May 2018</time>
            </div>
          </div>
        </div>
        <!-- end content -->
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>

    <!-- end tiny modal card -->
    <!-- Image modal -->
    <div id="modal-image2" class="modal modal-fx-3dSlit">
      <div class="modal-background"></div>
      <div class="modal-content is-huge is-image">
        <!-- content -->
        <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="image" />
        <!-- end content -->
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    <!-- Image modal -->
    <div id="modal-image4" class="modal modal-fx-3dSlit">
      <div class="modal-background"></div>
      <div class="modal-content is-huge is-image">
        <!-- content -->
        <img src="https://source.unsplash.com/hLyd1LukQ7E" alt="butterfly" />
        <!-- end content -->
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    <!-- Image modal-->
    <div id="modal-image" class="modal modal-fx-superScaled">
      <div class="modal-background"></div>
      <div class="modal-content is-image">
        <!-- content -->
        <img
          src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg"
          alt="Placeholder image"
        />
        <!--     <img src="https://source.unsplash.com/zFrUz_tNjCY" alt="placeholder">
        -->
        <!-- end content -->
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import NavBar from "@/components/NavBar";
import "bulma-modal-fx/dist/css/modal-fx.min.css";
import "bulma-modal-fx/dist/js/modal-fx.min.js";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "HomePage",
  components: {
    Carousel,
    Slide,
    Pagination,
    NavBar,
  },
  data() {
    return {
      slides: [
        {
          image: require("../assets/test.jpeg"),
        },
        {
          image: require("../assets/logo.png"),
        },
      ],
      isActive: false,
    };
  },
  methods: {
    toggleModal() {
      this.isActive = !this.isActive; // เปลี่ยนค่า isActive กลับและเปิด/ปิดโมดอล
    },
  },
});
</script>
