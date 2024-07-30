import { useState } from "react";
import "./App.css";

function App() {
  {
    // //Temel Tipler: string, number, boolean, null, undefined
    // let firstName:string = "Berkay";
    // let age :number =25;
    // let result : boolean = true;
    // let age :any = true
  }

  {
    //Union Types |
    //Literal Types
    // let age:string | number | boolean = true;
    // let statusResult : 'pending' | 'approved' | 'rejected';
    // statusResult = 'pending';
    // statusResult = 'approved';
    // statusResult = 'berkay'; //KULLANILAMAZ
    // console.log(statusResult);
  }

  {
    //Array
    // let  names: string[] = ["berkay","yaren","gökay"];
    // names.array.forEach((name) => {console.log(name)
    // });
    // let numbers : number[] = [1,2,3,4];
    // console.log(numbers);
    // let numbers2 : Array<number> = [1,2,3];
    // console.log(numbers2);
    // number[] = Array<number>
    // string[] = Array<string>
    // let mixedArray: (string | number | boolean)[]=["enes","ali",1,2,false]
  }

  {
    //string , boolean, number
    //interface - type : kendi tipimizi oluşturmamızı sağlıyor
    //type User = {
    //  name : string,
    //  age : number
    // }
    //optional type ?
    // interface User {
    //   name:string,
    //   age?: number
    // }
    // //let array : string[] = [];
    // //let array2 : User[] = [{name:"ali",age:22}];
    // const object1 : User = {
    //   name: "Berkay",
    // }
    // const object2 : User={
    //   name:"Yaren",
    //   age:22
    // }
    // console.log(object1)
  }

  {
    //function - önemli
    // function topla(a: number, b: number): number | string {
    //   // console.log(a+b)
    //   return "berkay";
    // }
    // const sonuc = topla(5, 3);
    // console.log(sonuc);
    //void : return etmeyen metottur
    // function write(array: Array<string>):void{
    //   array.forEach((value:string)=>console.log(value))
    // }
    // let array: string[]=["berkay","yaren"]
    // write(array);
  }

  {
    // interface User {
    //   name: string;
    //   age: number;
    // }
    // function writeConsole(array: User[]): void {
    //   array.forEach((value: User) => console.log(value));
    // }
    // const obj1: User = {
    //   name: "Berkay",
    //   age: 21,
    // };
    // const obj2: User = {
    //   name: "Yaren",
    //   age: 22,
    // };
    // let myArray: User[] = [obj1, obj2];
    // writeConsole(myArray);
  }

  {
    // function yazdir<T>(array:T[]):void{
    //   console.log(array)
    // }
    // yazdir(["berkay","yaren"])
    // yazdir([1,2,3,4,5])
    // yazdir([true,false])
    // interface GenericType<T>{
    //   name: string,
    //   age: number,
    //   salary : T
    // }
    // const obj1 : GenericType<string>={
    //   name:"Berkay",
    //   age:21,
    //   salary:"54000"
    // }
    // const obj2 : GenericType<number>={
    //   name:"Berkay",
    //   age:21,
    //   salary:54000
    // }
    // function write<T>(array:GenericType<T>[]):void{
    //   array.forEach((value:GenericType<T>)=> console.log(value))
    // }
    // let array : GenericType<string | number>[]=[obj1,obj2]
    // write(array)
  }

  {
    //Miras alma / extends
    // interface ortakAlanlar{
    //   id:string,
    //   olusturmaTarihi:string,
    //   olusturanKisi:string
    // }
    // interface Musteri extends ortakAlanlar{
    //   musteriNo:string
    // }
    // interface Kurum extends ortakAlanlar{
    //   kurumNo:string
    // }
    // const kurum : Kurum={
    //   id:"1",
    //   olusturmaTarihi:"09.06.2024",
    //   olusturanKisi:"Yaren",
    //   kurumNo:"777"
    // }
    // console.log(kurum)
  }

  {
    //Partial, Required, ReadOnly, pick, omit
    //Partial: optional yapar,
    //Required: her şeyi doldurmak zorunda bırakır.
    //ReadOnly: sadece okunabilir yapar. değerler üstüne yeni değerler atanamaz
    //Pick: sadece belirttiğimiz değişkeni almak için kullanılır.
    //Omit: belirttiğimiz değişkenin dışındakileri hedef alır
    // interface User {
    //   name: string;
    //   age?: number;
    //   lastname: string;
    //   tckn: string;
    //   birthdate: string;
    // }
    // const user1: Partial<User> = {
    //   name: "berkay",
    // };
    // const user2: Required<User> = {
    //   name: "yaren",
    // };
    // const user3: Readonly<User> = {
    //   name: "nilay",
    // };
    // user3.name = "gökay";
    // console.log(user3.name);
    // const user4:Pick<User,"name">={
    //   name:"Nuray"
    // }
    // const user5:Omit<User, "name">={
    //   lastname:"ÖCER"
    // }
  }

  return;
}

export default App;
