function getbmivalue()
{
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    height = height /100;

    var newbmivalue = weight(height*height);

    document.getElementById("bmi").value = newbmival;

    if(newbmivalue <18.5)
    {
        alert("your under weight");
    }
    else 
    {
        alert("your over weight")
    }
}