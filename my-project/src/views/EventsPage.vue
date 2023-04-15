<template>
  <div>
    <NavBar />
    <br />
    <br />
    <section class="container">
      <div class="columns features">
        <div class="column is-4" @click="toggleModal" data-target="modal-card">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://source.unsplash.com/RWnpyGtY1aU"
                  alt="Placeholder image"
                  class="modal-button"
                  data-target="modal-image2"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>Click on image above</h4>
                <p>
                  Purus semper eget duis at tellus at urna condimentum mattis.
                  Non blandit massa enim nec. Integer enim neque volutpat ac
                  tincidunt vitae semper quis. Accumsan tortor posuere ac ut
                  consequat semper viverra nam.
                </p>
                <span
                  class="button is-link modal-button"
                  data-target="modal-image2"
                  >Image modal</span
                >
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
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar";
import "bulma-modal-fx/dist/css/modal-fx.min.css";
import "bulma-modal-fx/dist/js/modal-fx.min.js";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "EventsContainer",
  components: {
    NavBar,
  },
  data() {
    return {
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
