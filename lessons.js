let app = new Vue({
    el: "#thesubjectlessons",
    data: {
    
      Lessons:[
        { spaces: "5",subject: "Math", location: "Leeds", price: 60, path: "https://cdn-icons-png.flaticon.com/512/221/221945.png", text: "Maths Icon",selected:false,booked:false},
        { spaces: "5",subject: "English", location: "Barking", price: 90, path: "./images/eng.png", text: "English Icon",selected:false,booked:false},
        { spaces: "5",subject: "Business", location: "London", price: 100, path: "./images/4230560_business_discussion_meeting_icon.png", text: "Business Icon",selected:false,booked:false},
        { spaces: "5",subject: "Social study", location: "Sheffield", price: 70, path: "./images/7295011_school_education_university_learning_study_icon.png", text: "Social science Icon",selected:false,booked:false},
        { spaces: "5",subject: "Engineering", location: "London", price: 80, path: "./images/6588945_cog_construction_engineering_hand_hold_icon.png", text: "Engineering Icon",selected:false,booked:false},
        { spaces: "5",subject: "Law", location: "London", price: 100, path: "./images/753941_lawyer_judge_justice_law_legal_icon.png", text: "Law Icon",selected:false,booked:false},
        { spaces: "5",subject: "Medicine", location: "Essex", price: 100, path: "./images/8541654_capsules_pills_medicine_icon.png", text: "Medicine Icon",selected:false,booked:false},
        { spaces: "5",subject: "science", location: "Cambridge", price: 90, path: "./images/115722_lab_test_science_vials_chemistry_icon.png", text: "science Icon",selected:false,booked:false},
        { spaces: "5",subject: "Accounting", location: "Liverpool", price: 100, path: "./images/6598178_accounting_economy_finance_report_tax_icon.png", text: "Accounting Icon",selected:false,booked:false},
        { spaces: "5",subject: "Architecture", location: "London", price: 80, path: "./images/3465582_architecture_coliseum_colosseum_gladiator_landmark_icon.png", text: "Architecture Icon",selected:false,booked:false},
        { spaces: "5",subject: " Art and Design", location: "Manchester", price: 70, path: "./images/9025862_paint_brush_household_art_icon.png", text: " Art and Design Icon",selected:false,booked:false},
      ],
      shoppingbutton:false,
      Disabledcheckoutbutton:true,
      themainlessonshow:true,
      thetoggledisable:true,
      thefilter:0
  
    },
  
  // this is the sorting functions
    computed: {
      sortPrice() {
      
      function compare(a, b) {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      console.log(a,b);
      return 0;
      }
      
      return this.Lessons.sort(compare);
      },
  
  
  
  
      sortsubject() {
       
        function compare(a, b) {
        if (a.subject > b.subject) return 1;
        if (a.subject < b.subject) return -1;
        console.log(a,b);
  
        return 0;
        }
       
        return this.Lessons.sort(compare);
        },


        sortlocation() {
         
          function compare(a, b) {
          if (a.location > b.location) return 1;
          if (a.location < b.location) return -1;
          return 0; console.log(a,b);
          }
         
          return this.Lessons.sort(compare);
          },
  
  
  
      }
      
      
      ,
  
  
    methods: {
    
      Shoppingcart:function(){
  
        
  
  if(this.themainlessonshow== false){
    this.themainlessonshow= true;
    this.shoppingbutton = false;
  
  }else{
  
    this.themainlessonshow= false;
    this.shoppingbutton = true;
  }
  
  
      },
  
  
      takewayspace: function (indexofnum) {
  
  
  console.log(this.Lessons[indexofnum].spaces);
  
        // Condition to ensure number of space is greater than 0
        if (this.Lessons[indexofnum].spaces > 0) {
          // If true then decrement value by  1
          this.Lessons[indexofnum].spaces--;
          this.thetoggledisable =  false;
       
          this.Lessons[indexofnum].selected = true;
        
        
  
  
        }else{
  this.Lessons[indexofnum].booked =true;
  
        }
      },
  
      removelesson: function (indexofnum) {
  
  
        console.log(this.Lessons[indexofnum].spaces);
        
              // Condition to ensure number of space is greater than 0
         
                // If true then decrement value by  1
                this.Lessons[indexofnum].spaces++;
                this.Lessons[indexofnum].selected = false;
                this.Lessons[indexofnum].booked =false;
           
            },
  
            nameofuser: function(){
              let thetext = document.forms["theform"]["ofusername"].value;
  
              if (!/[^a-zA-Z]/.test(thetext) ){
  
                this.Disabledcheckoutbutton = false;
              }else{
                this.Disabledcheckoutbutton = true;
              }
            },
  
  
            phonenumber: function(){
              let thephone = document.forms["theform"]["phone"].value;
                console.log(thephone);
                 
                  if(thephone.match(/^[0-9]+$/) != null)
                  {
                    this.Disabledcheckoutbutton = false;
                  }
                  else
                  {
                    this.Disabledcheckoutbutton = true;
                  }
  
            },
  
            actioncompleted: function(){
              let thephone = document.forms["theform"]["phone"].value;
              let thetext = document.forms["theform"]["ofusername"].value;
              if( thetext== "" & thephone ==""){
                this.Disabledcheckoutbutton = true;
  
              }else{
  

if(thephone ==""){
  this.Disabledcheckoutbutton = true;


}else{
  alert("Order submitted");

}

               
  
              }
  
            },


         
  
            sortedProducts1: function (indexofnumsss) {
              // the comparison function that defines the order
              function compare(a, b) {
              if (a.price > b.price) return 1;
              if (a.price < b.price) return -1;
              return 0;
              }
              console.log(indexofnumsss);
              // sort the 'products' array and return it
              return this.Lessons.sort(compare);
              }
  
  
            
  
  
    },
  });
  