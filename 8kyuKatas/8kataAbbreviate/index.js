function abbrevName(name){
    let array_name = name.split(' ');
    return array_name[0].charAt(0).toUppercase() + '.' + array_name[1].charAt(0).toUppercase();
}

console.log(abbrevName("Sam Harris"));
