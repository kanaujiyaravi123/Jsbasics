//create a class dog that extends another class Animal and create a constructor in Dog class 
//which take parameters like(name , type ) which it has inherited from Animal class using super 
//and breedtype which is its own property and then create a new object for the class and at 
//last print the name , type and breedtype of the  object created
class animal{
    constructor(name,type)
    {
        this.name=name;
        this.type=type;
    }

}
class dog extends animal
{
    constructor(name,type,breedtype)
    {
        super(name,type)
        this.breedtype=breedtype;
    }
    show()
    {
       console.log(`Name-${this.name}`)
       console.log(`Type-${this.type}`)
       console.log(`BreedType-${this.breedtype}`)
    }
}
let mydog=new dog("tommy","lko","lucky");
mydog.show()