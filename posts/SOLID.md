---
title: 'SOLID Principles'
tags: 'swe'
date: 'Mar 20, 2024'
---

While studying for my Software Engineering exam, SOLID principles was one of the topics that piqued my interest, because it has the *clear* ingredients to help me write "clean code". In summary, it's a guideline on how to write good OOP software. There are 5 main guidelines that helps us write good software.  **Single Responsibility Principle**, **Open Closed Principle**, **Liskov Substitution Principle**, **Interface Segregation Principle**, and **Dependency Inversion Principle**.

## (S)ingle Responsibility Principal
***Classes should only have 1 job and have high cohesion within itself.***
All methods of that object should directly contribute to the primary outcome of that object
```c#
// does not obey SRP
    public class Animal {
        public Animal(string name){ }
        public getAnimalName() { }
        public saveAnimal(Animal animal) { }
    }

// does obey SRP
    public class Animal {
        public Animal(string name){ }
        public getAnimalName() { }
    }

    public class AnimalDB {
        public getAnimal(Animal animal) { }
        public saveAnimal(Animal animal) { }
    }
```
separating Animal class (what is an animal) from Animal storage class (where is an animal)

## (O)pen Closed Principal
***Software Entities(Class, Interface, Methods, etc.) should be able to extend functionality without needing to modify its existing code.*** <br>
It is able to achieve this through polymorphism, inheritance, abstractions.
 
Class / Interface
- **Don't** modify by removing or changing methods
- **Do** modify by adding new methods / overloading existing methods

```c#
{
//Does not obey OCP
    const Array<Animal> animals = [
    Animal lion = new Animal('lion'),
    Animal mouse = new Animal('mouse'),
    //adding new Animal snake
    Animal snake = new Animal('snake')
    ]

    public class AnimalSound(Array<Animal> animals) {
        for(int i = 0; i <= animals.length; i++) {
            if(animals[i].name == 'lion')
                Console.WriteLine('roar');
            if(animals[i].name == 'mouse')
                Console.WriteLine('squeak');
            //we would need to add another case/ if statement here
            if(animals[i].name == 'snake')
                Console.WriteLine('hiss');
        }
    }

    AnimalSound(animals);

//Does obey OCP
    const Array<Animal> animals = [
        Lion lion = new Lion('lion'),
        Squirrel mouse = new Mouse('mouse'),
        Snake snake = new Snake('snake')
    ]
    //Base class
    public class Animal { 
        public virtual void makeSound(); 
    }

    //Inherit from base Animal class and override function to fit it's Animal
    public class Lion : Animal {
       public override void makeSound() { return 'roar'; }
    }
    public class Mouse : Animal {
        public override void makeSound() { return 'squeak'; }
    }
    public class Snake : Animal {
        public override void makeSound() { return 'hiss'; }
    }

    public AnimalSound(Array<Animal> animals) {
        for(int i = 0; i <= a.length; i++) {
            Console.WriteLine(animals[i].makeSound());
        }
    }

    AnimalSound(animals);
}
```

## (L)iskov Substitution Principal
***You should be able to replace any object from a base class to a substitute class without any issues, vice versa.*** You wouldn't need to know how it is implemented differently.

Think of it as booking an Uber, it'll have different type to fit your needs like:
- UberX(parent) go from A to B
- UberXL(child) UberX + bigger
- UberBlack(child) UberXL + more premium

Its standard would be to take you from point A to B while the other option **extends** from the base model and provides extra functionalities. 

```c#
{
//Does not obey LSP & OCP
    const Array<Animal> animals= [
        Animal lion = new Animal('lion'),
        Animal mouse = new Animal('mouse'),
        Animal snake = new Animal('snake')
    ]
    //Needs to tailor every case to call a respective function (bad maintainability)
    function AnimalLegCount(Array<Animal> animals) {
        for(int i = 0; i <= a.length; i++) {
            if(typeof a[i] == Lion)
                Console.WriteLine(LionLegCount(a[i]));
            if(typeof a[i] == Mouse)
                Console.WriteLine(MouseLegCount(a[i]));
            if(typeof a[i] == Snake)
                Console.WriteLine(SnakeLegCount(a[i]));
        }
    }
    AnimalLegCount(animals);

//Does obey OCP
    const Array<Animal> animals = [
        Lion lion = new Lion('lion'),
        Squirrel mouse = new Mouse('mouse'),
        Snake snake = new Snake('snake')
    ]

    class Animal {
        public virtual void makeSound();
        public virtual void legCount();
        //...
    }
    class Lion : Animal {
        public override void makeSound() { return 'roar'; }
        public override void LegCount() { /*...*/ }
    }
    class Mouse : Animal {
        public override void makeSound() { return 'squeak'; }
        public override void LegCount() { /*...*/ }
    }
    class Snake : Animal {
        public override void makeSound() { return 'hiss'; }
        public override void LegCount() { /*...*/ }
    }
    //...
    public AnimalLegCount(Array<Animal> animals) {
        for(let i = 0; i <= animals.length; i++) {
            animals[i].LegCount();
        }
    }
    AnimalLegCount(animals);
}
```

## (I)nterface Segregation Principal
***Interfaces should be very distinct and separate (role interfaces)***

Think of it as having a [car(911 gt3rs)](https://configurator.porsche.com/en-US/model/992850?rt=1710996052&screen=1920x1080) with different packs/mods(interface) to choose from.
They don't necessarily need to implement all of it but can choose which one to implement, and only implement the ones they need.
- Base package (the standard stuff)
- Weissach package (cosmetics, performance, etc)
```c#
{
//Does not obey ISP
    interface IShape {
        void drawCircle();
        void drawSquare();
        void drawRectangle();
    }   
    //needs to draw other shape, due to the interface not being distinct enough
    class Circle implements IShape {
        public void drawCircle(){ /*...*/ }
        public void drawSquare(){ /*...*/ }
        public void drawRectangle(){ /*...*/ }
    }

//Does obey ISP
    interface IShape {
        void draw();
    }
    class Circle : IShape {
        //able to tailor to draw differecnt specific shapes of its class (ie: semi-circle)
        public void draw(){ /*draw circle*/ }
    }
    class Square : IShape {
        public void draw(){ /*draw square*/ }
    }
}
//NOTE: some language lets interface extend/inherit from other interfaces
```

## (D)ependency Inversion Principal
***High-level modules should not depend on low-level modules, they should depend on abstractions(interfaces, abstract class)***
You should not have an object create other objects that it depends on.

Think of it as when you book a hotel room(object you depend on), you rely on the hotel(outside source) to provide you with it.

```c#
//Does not obey DIP
    public class SalaryCalculator {
            public float CalculateSalary(int hoursWorked, float hourlyRate) => hoursWorked * hourlyRate;
        }
    public class EmployeeDetails {
            public int HoursWorked { get; set; }
            public int HourlyRate { get; set; }
            public float GetSalary()
            {
                var salaryCalculator = new SalaryCalculator();
                return salaryCalculator.CalculateSalary(HoursWorked, HourlyRate);
            }
        }

//Does obey DIP
    //creates the interface
    public interface ISalaryCalculator {
        float CalculateSalary(int hoursWorked);
    }
    //the concrete class
    public class SalaryCalculatorBase : ISalaryCalculator {
        public float CalculateSalary(int hoursWorked) => hoursWorked * 16;
    }

    public class SalaryCalculatorPromoted : ISalaryCalculator {
        public float CalculateSalary(int hoursWorked) => hoursWorked * 32;
    }

    public class EmployeeDetails {

        private ISalaryCalculator _salaryCalculator;

        //constructor that takes in interface
        public EmployeeDetails(ISalaryCalculator salaryCalculator) {
        _salaryCalculator = salaryCalculator;
        }
        public int HoursWorked { get; set; }
        
        public float GetSalary() {
            return _salaryCalculator.CalculateSalary(HoursWorked);
        }
    }

    //when creating the object from the class, inject the concrete class rather than the interface
    var employeeNew = new EmployeeDetails(new SalaryCalculatorBase()); //will get base employee salary
    var employeeOld = new EmployeeDetails(new SalaryCalculatorPromoted()); //will get promoted employee salary

```
## Reminders:
Abstract Method
- It must reside in an *abstract class*, and it has no-body.
- It must be overridden in non-abstract child class.

Virtual Method
- It can reside in abstract and non-abstract class.
- It is not necessary to override virtual method in derived, but it can be.
- It must have body (can be overridden by "override keyword")

Some good blogs that helped me to understand these concepts:
[blog1](https://configurator.porsche.com/en-US/model/992850?rt=1710996052&screen=1920x1080), 
[blog2](https://medium.com/capgemini-microsoft-team/back-to-basics-the-solid-principles-3ab6b4322080)