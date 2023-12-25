<template>
    <div style="width: 1000px; height: 1000px; background: #1E1E1E;display: flex; justify-content: center; align-items: center;">
  
  
  <div style="width: 635px; height: 80px; left: 0px; top: 0px; position: absolute">
    <div style="width: 700px; height: 0px; left: 20px; top: 79px; position: absolute; border: 1px #6B614E solid"></div>
    <div style="left: 206px; top: 39px; position: absolute; text-align: center; color: #ABA08C; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">Zahtevi zaposlenih</div>
    <img src="../../rsc/imgs/Menu_Icon.png" style="position: absolute; top: 40px; left: 20px; width: 40px; height: 30px;"/>
    <img src="../../rsc/imgs/Back_Icon.png" style="position: absolute; top: 40px; left: 60px; width: 40px; height: 30px;"/>
    <img src="../../rsc/imgs/Main_Menu_Icon.png" style="position: absolute; top: 40px; left: 100px; width: 40px; height: 30px;"/>
  </div>
  <div>
     <h3
    style=" position: absolute;
            left: 160px;
            top: 190px;
            color:#FFFFFF ">
            Marko Marković</h3>
    <span
          style="
            width: 330px;
            height: 60px;
            border: 2px solid #6B614E;
            border-radius: 10px;
            padding: 5px;
            box-sizing: border-box;
            font-size: 18px;
            font-family: Inter;
            font-weight: 700;
            color: #FFFFFF;
            background-color: #1E1E1E;
            position: absolute;
            left: 160px;
            top: 230px;
          "
        >Zahtev za rad od kuće 20.12.2023.</span>
    </div>
     <div>
    <h3
    style=" position: absolute;
            left: 160px;
            top: 280px;
            color:#FFFFFF ">
            Pera Perić</h3>
    <span
          type="text"
          placeholder="Zahtev za evaluaciju"
          style="
            width: 330px;
            height: 60px;
            border: 2px solid #6B614E;
            border-radius: 10px;
            padding: 5px;
            box-sizing: border-box;
            font-size: 18px;
            font-family: Inter;
            font-weight: 700;
            color: #FFFFFF;
            background-color: #1E1E1E;
            position: absolute;
            left: 160px;
            top: 320px;
          "
        >Zahtev za evaluaciju</span>
    </div>
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
    color: #FFFFFF; /* Set the placeholder color to white */
  }

</style>