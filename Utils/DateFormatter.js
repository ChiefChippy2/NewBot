module.exports= new class "CoolDate" extends Date{
constructor(x){
return new Date(x)

}

this.getTimeAgo=(short)=>{
let s = this.getTime()/1000
if(short) const sep=[[60,"secs"],[60,"mins"],[24,"hrs"],[30,"days"],[12,"months"],[1000000,"yrs"]]
else const sep=[[60,"seconds"],[60,"minutes"],[24,"hours"],[30,"days"],[12,"months"],[1000000,"years"]]
/*30 days in general*/
let result=""
for(let se of sep){
result = ((s%se[0])+" "+s%se[0]===1?se[1].slice(-1):se[1])+result?", ":"ago."
s/=se[0]
if(s<1) break;
}
return s
}
this.format=()=>{
return `${this.getMonths()}/${this.getDate()}/${this.getYears()}, at ${this.getHours()}:${this.getMinutes()}:${this.getSeconds()} (UTC${this.getTimezoneOffset()/-60})`

}



}