const prompt =require("prompt-sync")();
// 1)
// input: rows=4
// output: 
//    1
//   1 2
//  1   3
// 1     4
//  1   3
//   1 2
//    1

// code : 

rows=+prompt("Enter no of rows : ");
for(i=1;i<=2*rows;i++)
    {
        let a=1;
        let cols=(i<=rows)?i:2*rows-i;
        let spaces=(i<=rows)?rows-i:i-rows;
        let s="";
        for(k=1;k<=spaces;k++)
            {
                s=s+" ";
            }
        for(j=1;j<=cols;j++)
            {
                if(j==1 || i==j || i+j==2*rows)
                 s=s+a+" ";
                else
                s=s+"  ";
                a++;
            }
            console.log(s);
    }



// 2) input: rows=4
// output : 
//    1
//   1 2
//  1   3
// 1     4
//  3   1
//   2 1
//    1

// code :

rows1=+prompt("Enter no of rows : ");
for(i=1;i<=2*rows;i++)
    {
        let a=1;
        let cols=(i<=rows1)?i:2*rows1-i;
        let spaces=(i<=rows1)?rows1-i:i-rows1;
        let s="";
        for(k=1;k<=spaces;k++)
            {
                s=s+" ";
            }
        for(j=1;j<=cols;j++)
            {
                if(i<=rows1){
                if(j==1 || i==j)
                    s=s+j+" ";
                else
                    s=s+"  ";
                }
               else
               {
                if(j==1 || i==j || i+j==2*rows1)
                    s=s+(cols-j+1)+" ";
                else
                    s=s+"  ";
                }
               }
            
            console.log(s);
    }
