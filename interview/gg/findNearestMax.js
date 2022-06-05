/**
 * Giving a sorted array and a number x, find the nearest largest number in array compare to x
 */
 function findMax(a, x) {
    let max=-1;
    if (a.length==0) {
      return -1;
    } else if (x<a[0]) {
      return -1;
    } else if (x>a[a.length-1]) {
      return a[a.length-1];
    } else {
      let li=0, mi=a.length-1, num=a[Math.floor((mi-li)/2)];
      while (li!=mi) {      
        if (num==x) {
          max=num;
          break;
        } else if (num<x) {
          let temp = Math.floor((mi-li)/2)+li;
          if (temp!=li) {
            max=num;
            li=temp;
            num=a[Math.floor((mi-li)/2)+li];
          } else {
            break;
          }
        } else {
          let temp = Math.floor((mi-li)/2)+li;
          if (temp!=mi) {
            mi=temp;
            num=a[Math.floor((mi-li)/2)+li];
          } else {
            break;
          }
        }
      }
      return max;
    }
  }
  let a=[2,3,4,5,9,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,50,56,60,66,67,68,9,80,85,89,90,95,96,97,98,99,100];
  console.log(findMax(a,94));