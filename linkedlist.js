
function Node(value){
  this.value = value;
  this.next = null;
}

function LinkedList(){
  this.head = null;
    
  this.add = function (value){
    var node = new Node(value);
    
    if(!this.head)
    {
      this.head=node;
    }
    else
    {
      var inode=this.head;
      while(inode.next)
      {
        var tmpNode=inode.next;
        if(!tmpNode)
          break;
        else
          inode=tmpNode;
      }
      inode.next=node;
    }
  }
  
  this.reverse=function()
  {
    var previous=this.head;  //1
    var current=this.head.next  //2
    var next=this.head.next.next;  //3
    previous.next=null;    
    while(next)
    {
//      console.log('previous:'+previous.value);    //3
//      console.log('current:'+current.value);    //3
//      console.log('next:'+next.value);    //3
      
      current.next=previous;
      previous=current;
      current=next;
      next=next.next;
    }
//      console.log('previous:'+previous.value);    //3
//      console.log('current:'+current.value);    //3

    current.next= previous;
    this.head=current;

  }
  
  this.print =function()
  {
    var inode=this.head;
    while(inode.next)
    {
      console.log(inode.value)
      inode=inode.next;
    }
    console.log(inode.value)
    console.log();
  }
}

var link1=new LinkedList();
link1.add(1);
link1.add(2);
link1.add(3);
link1.add(4);
link1.add(5);
link1.print();

link1.reverse();
link1.print();
