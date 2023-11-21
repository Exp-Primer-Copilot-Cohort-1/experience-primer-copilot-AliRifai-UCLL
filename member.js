function skillsMember() {
    var skills = {
        name: 'John',
        age: 30,
        skills: ['JS', 'React', 'Node'],
        greet: function () {
            console.log('Hello');
        }
    };
    console.log(skills.name);
    console.log(skills.age);
    console.log(skills.skills);
    skills.greet();
}