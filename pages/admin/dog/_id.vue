<template>
  <div v-if="dog" class="adminbox">
    <div v-if="editing" class="loader blackcover">
      <div class="spinner spinner-white"></div>
    </div>
    <Modal :show="delShow">
      <div class="m-top">
        <h5>Delete</h5>
      </div>
      <div class="m-mid">
        <p>คุณต้องการลบหรือไม่</p>
      </div>
      <div class="m-bot">
        <button class="btn-warn btn-mar" @click="Delete()">Delete</button>
        <button
          class="btn-default"
          @click="
            () => {
              delShow = false;
            }
          "
        >Cancel</button>
      </div>
    </Modal>

    <div class="padadmin addupdate dog-au">
      <div class="input-box">
        <div class="sep">
          <div class="form-control">
            <label>ชื่อ:</label>
            <input
              ref="name"
              v-model="dog.name"
              :class="nameErr ? 'error' : ''"
              type="text"
              placeholder="กรุณากรอกชื่อ"
            />
          </div>
          <div class="form-control">
            <label>พันธุ์:</label>
            <input
              ref="breed"
              v-model="dog.breed"
              :class="breedErr ? 'error' : ''"
              type="text"
              placeholder="กรุณากรอกพันธุ์"
            />
          </div>
          <div class="form-control">
            <label>อายุ:</label>
            <input
              ref="ageYear"
              v-model="dog.ageYear"
              :class="ageYearErr ? 'error' : ''"
              type="text"
              style="width: 50px"
            />
            ปี
            <input
              ref="ageMonth"
              v-model="dog.ageMonth"
              :class="ageMonthErr ? 'error' : ''"
              type="text"
              style="width: 50px"
            />
            เดือน
          </div>
          <div class="form-control">
            <label>เพศ:</label>
            <span class="select" style="width: 200px">
              <Select
                :error="sexErr"
                custom-text="กรุณาเลือกเพศ"
                :options="sexSelect"
                :default-option="getDogsex"
                @sel-change="onChangeSex($event)"
              />
            </span>
          </div>
          <div class="form-control">
            <label>ลักษณะ:</label>
            <textarea ref="description" v-model="dog.description" :class="descErr ? 'error' : ''" />
          </div>
          <div class="form-control">
            <label>สีปลอกคอ:</label>
            <span class="select" style="width: 200px">
              <Select
                :error="colorCollarErr"
                custom-text="กรุณาเลือกสีปลอกคอ"
                :options="collarColorSelect"
                :default-option="getDogcolor"
                @sel-change="onChangeColor($event)"
              />
            </span>
          </div>
          <div class="form-control">
            <label>สถานะ:</label>
            <span class="select" style="width: 200px">
              <Select
                :error="isAliveErr"
                custom-text="กรุณาเลือกสถานะ"
                :options="isAliveSelect"
                :default-option="getDogstatus"
                @sel-change="onChangeAlive($event)"
              />
            </span>
          </div>
          <div class="form-control">
            <label>เบอร์ติดต่อ:</label>
            <input
              ref="caretakerPhone"
              v-model="dog.caretakerPhone"
              :class="caretakerPhoneErr ? 'error' : ''"
              type="text"
              placeholder="กรุณากรอกข้อมูลติดต่อ"
            />
          </div>
          <div class="form-control">
            <label>ผู้ดูแล:</label>
            <input
              ref="caretaker"
              v-model="dog.caretaker"
              :class="caretakerErr ? 'error' : ''"
              type="text"
              placeholder="กรุณากรอกชื่อผู้ดูแล"
            />
          </div>
          <div class="form-control">
            <label>ที่อยู่:</label>
            <textarea ref="location" v-model="dog.location" :class="locationErr ? 'error' : ''" />
          </div>
        </div>

        <div class="img-upload">
          <div class="form-control im">
            <p v-if="!imgPath && imgPath === ''">ไม่มีรูป</p>
            <v-lazy-image v-else :src="imgUrl" :src-placeholder="imgPlacehold" />
          </div>
          <div class="form-control">
            <input ref="file" type="file" accept="image/*" :disabled="uploading" />
          </div>
          <div class="form-control">
            <button
              :class="'btn-' + (imgErr ? 'warn' : 'default')"
              :disabled="uploading"
              @click="upload()"
            >Upload</button>
          </div>
        </div>
      </div>

      <div class="admin-btn-pos">
        <div>
          <button class="btn-success" :disabled="uploading" @click="saveValidate()">Save</button>
          <button
            v-if="$route.params.id !== 'add'"
            class="btn-warn"
            :disabled="uploading"
            @click="
              () => {
                delShow = true;
              }
            "
          >Delete</button>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="loader adminbox">
    <div class="spinner spinner-black"></div>
  </div>
</template>

<script lang="ts" src="./DogAddUpdate.ts"></script>

<style lang="scss" scoped>
@use 'assets/styles/var';
@use 'assets/styles/color';
@use 'assets/styles/selector';
@use 'assets/styles/responsive';
.dog-au {
  grid-template-rows: 90% 10%;
}

.txt {
  height: 10em;
}

.input-au {
  width: 100%;
}

.input-box {
  place-self: center stretch;
  display: grid;
  gap: 1rem 1rem;
  grid-template-columns: 1fr 1fr;
}

.sep {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
