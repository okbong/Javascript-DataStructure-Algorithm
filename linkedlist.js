
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
link1.add(4);
link1.add(5);
link1.add(6);
link1.print();
