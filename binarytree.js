function Node(value)
{
  this.value=value;
  this.sum=0;
  this.left=null;
  this.right=null;
}

function BinaryTree()
{
  this.root=null;
  
  this.add= function(value)
  {
    var node = new Node(value);
    
    if(!this.root)
    {
      this.root = node;
      return;
    }
    
    var inode= this.root;
    while(inode)
    {
      if(inode==null)
        break;
      if(inode.value>value)
      {  
        if(inode.left==null){
          inode.left=node;
          break;
        }
        else
          inode=inode.left;
      }
      else
      {
        if(inode.right==null){
          inode.right=node;
          break;
        }
        else
	      inode=inode.right;
      }
    }
    
  }
  
  this.traverseRight=function(node,pathObj)
  {
    if(node==null)
    {
      return;
    }
    pathObj.path+=node.value+' ';
    this.traverseRight(node.right,pathObj);
    this.traverseRight(node.left,pathObj);

  }
  
  this.traverseLeft=function(node,pathObj)
  {
    if(node==null)
    {
      return;
    }
    pathObj.path+=node.value+' ';
    this.traverseLeft(node.left,pathObj);
    this.traverseLeft(node.right,pathObj);
  }
  
  this.isSymmetric=function(node)
  {
    var pathRight={path:''};
    this.traverseRight(node.right,pathRight);
    var pathLeft={path:''};
    this.traverseLeft(node.left,pathLeft);
    
    console.log(pathRight.path+'<=>'+pathLeft.path);
    if(pathRight.path==pathLeft.path)
      return true;
    else
      return false;
  }

  
  this.sumify=function(node)
  {
    if(node==null)
      return 0;
  
    var tmpval=node.value;
    
    node.sum=this.sumify(node.left)+this.sumify(node.right);
    return node.sum+tmpval;
    
  }
  
  this.sumify2=function(node)
  {
    if(node.left==null && node.right==null)
    {
      node.sum=node.value;
      return node.value;
    }
    else if(node.left==null && node.right!=null)
    {
      node.sum=this.sumify(node.right)+node.value;
      return node.sum;
    }
    else if(node.left!=null && node.right==null)
    {
      node.sum=this.sumify(node.left)+node.value;
      return node.sum;
    }
    else
    { 
      node.sum=this.sumify(node.left)+this.sumify(node.right)+node.value;
      return node.sum;
    }
  }
  
  this.print= function(node)
  {
    if(node==null)
      return;
    console.log(node.value+":"+node.sum);
    if(node.left!=null)
      console.log(node.value+'->left');
    else console.log(node.value+'->left null');
    this.print(node.left);
    if(node.right!=null)
      console.log(node.value+'->right');
    else console.log(node.value+'->right null');
    this.print(node.right);
  }
  
}

var btree=new BinaryTree();
btree.add(5);
btree.add(2);
btree.add(4);
btree.add(6);
btree.add(1);
btree.add(7);

var result={path:''};
btree.traverseLeft(btree.root,result);
console.log(result.path);

btree.sumify(btree.root);
btree.print(btree.root);


var node0=new Node(7);
var node1=new Node(3);
var node2=new Node(3);
var node3=new Node(4);
var node4=new Node(4);
var node5=new Node(5);
var node6=new Node(5);


var btree2=new BinaryTree();
btree2.root=node0;
btree2.root.left=node1;
btree2.root.right=node2;
btree2.root.left.left=node3;
btree2.root.right.right=node4;
btree2.root.left.right=node5;
btree2.root.right.left=node6;

console.log('isSymmetic:'+btree2.isSymmetric(btree2.root));



