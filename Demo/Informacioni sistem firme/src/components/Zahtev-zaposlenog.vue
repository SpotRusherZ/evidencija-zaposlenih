<template>
    <div style="width: 1000px; height: 1000px; background: #1E1E1E;display: flex; justify-content: center; align-items: center;">
  <select
      style="
        width: 200px;
        height: 60px;
        border: 2px solid #6B614E;
        border-radius: 10px;
        padding: 5px;
        box-sizing: border-box;
        font-size: 14px;
        font-family: Inter;
        font-weight: 700;
        color: #FFFFFF;
        background-color: #1E1E1E;
        position: absolute;
        left: 550px;
        top: 330px;
      "
    >
      <option value="" disabled selected hidden>Izaberite odgovor</option>
      <option value="rad_od_kuce">Odobri</option>
      <option value="kurs">Odbij</option>
    </select>
  
  <div style="width: 635px; height: 80px; left: 0px; top: 0px; position: absolute">
    <div style="width: 700px; height: 0px; left: 20px; top: 79px; position: absolute; border: 1px #6B614E solid"></div>
    <div style="left: 206px; top: 39px; position: absolute; text-align: center; color: #ABA08C; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">Zahtev za rad od kuće 20.12.2023.</div>
    <img src="../../rsc/imgs/Menu_Icon.png" style="position: absolute; top: 40px; left: 20px; width: 40px; height: 30px;"/>
    <img src="../../rsc/imgs/Back_Icon.png" style="position: absolute; top: 40px; left: 60px; width: 40px; height: 30px;"/>
    <img src="../../rsc/imgs/Main_Menu_Icon.png" style="position: absolute; top: 40px; left: 100px; width: 40px; height: 30px;"/>
  </div>
  <div style="width: 133px; height: 27px; left: 93px; top: 296px; position: absolute; text-align: center; color: white; font-size: 12px; font-family: Inter; font-weight: 700; word-wrap: break-word">
<input
          type="text"
          placeholder="Želeo bih da 20.12.2023. radim od kuće zbog dolaska majstora."
          style="
            width: 500px;
            height: 100px;
            border: 2px solid #6B614E;
            border-radius: 10px;
            padding: 5px;
            box-sizing: border-box;
            font-size: 12px;
            font-family: Inter;
            font-weight: 700;
            color: #FFFFFF;
            background-color: #1E1E1E;
            position: absolute;
            left: -60px;
            top: 20px;
          "
        /> </div>
    <input
          type="text"
          placeholder="Zahtev zaposlenog Marko Marković"
          style="
            width: 300px;
            height: 60px;
            border: 2px solid #6B614E;
            border-radius: 10px;
            padding: 5px;
            box-sizing: border-box;
            font-size: 12px;
            font-family: Inter;
            font-weight: 700;
            color: #ABA08C;
            background-color: #1E1E1E;
            position: absolute;
            left: 40px;
            top: 180px;
          "
        />
  <div style="width: 183px; height: 42px; padding-left: 44px; padding-right: 44px; padding-top: 5px; padding-bottom: 5px; left: 140px; top: 430px; position: absolute; background: #EBC786; border-radius: 5px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
    <span @click="clicked=true" style="text-align: center; color: white; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">Potvrdi</span>
  </div>
  
  <template v-if="clicked">
  <div style="width: 336px; height: 187px; left: 160px; top: 201px; position: absolute">
    <div style="width: 336px; height: 187px; left: 0px; top: 0px; position: absolute; background: #6B614E; border-radius: 20px"></div>
    <div style="width: 280px; height: 30px; left: 22px; top: 17px; position: absolute; color: white; font-size: 12px; font-family: Inter; font-weight: 700; word-wrap: break-word"><br/>Odgovor je uspešno zabeležen.<br/></div>
    <div style="width: 105px; height: 25px; padding-left: 44px; padding-right: 44px; padding-top: 5px; padding-bottom: 5px; left: 115px; top: 142px; position: absolute; background: #EBC786; border-radius: 5px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
      <span @click="clicked=false, opis='Opis', benefit='Izaberi benefit', datum='dd-mm-gggg'" style="text-align: center; color: white; font-size: 13px; font-family: Inter; font-weight: 600; word-wrap: break-word">Potvrdi</span>
    </div>
  </div>
  </template>
</div>
</template>

<script>

export default{
    data() {
      return {
        clicked:false,
        opis:"Opis",
        benefit: "Izaberi benefit",
        datum: "dd-mm-gggg"
      }
    }
}
</script>


<style>
.full-page {
  width: 100vw; /* 100% of the viewport width */
  height: 100vh; /* 100% of the viewport height */
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center; /* Optional: centers the content horizontally */
  align-items: center; /* Optional: centers the content vertically */
  /* Add additional styles as needed */
}

::placeholder {
    color: #FFFFFF;
    font-size: 18px;
}

::value {
    color: #FFFFFF;
    font-size: 14;
}
</style>