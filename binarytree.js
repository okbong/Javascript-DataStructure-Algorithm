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
btree.sumify(btree.root);
btree.print(btree.root);

