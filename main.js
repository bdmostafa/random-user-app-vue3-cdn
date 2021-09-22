const app = Vue.createApp({
  //   template: "<h2>Hello {{ firstName }} </h2>",
  data() {
    return {
      firstName: "Julian",
      lastName: "Tucker",
      email: "julian.tucker@example.com",
      id: 660919315,
      nationality: "AU",
      phone: "07-8379-7922",
      gender: "male",
      registered: "12",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    };
  },
  methods: {
    async getUserInfo() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.id = results[0].id["value"];
      this.nationality = results[0].nat;
      this.phone = results[0].phone;
      this.email = results[0].email;
      this.registered = results[0].registered["age"];
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#root-app");
