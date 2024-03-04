const Node =  require('./Node')

class LinkedList {

    constructor() {
        this.head = null;
        this.count = 0;
    }

    insertLast(value){

        let new_node = new Node(value);

        if(this.head == null) this.head = new_node;

        else {
            let last = this.head; 

            while (last.next != null) last = last.next;
            last.next = new_node;
        }

        this.count++;   
    }

    insertFirst(value){

        let new_node = new Node(value);
        new_node.next = this.head;
        this.head = new_node;

        this.count++;
    }

    deleteFirst(){

        if(this.head == null) throw new Error("Linked list is empty!");
        
        this.head = this.head.next;
        this.count--;
    }

    deleteLast(){

        if(this.head == null) throw new Error("Linked list is empty!");

        let last = this.head,pre = null;

        while (last.next != null){
            pre = last;
            last = last.next;
        }

        if(pre == null){
            this.head =this.head.next;
            this.count--;
            return;
        }

        pre.next = null;
        this.count--;
    }

   add(index,value){

        if(this.head == null) throw new Error("Linked list is empty!");
        
        if(index<1 || index>this.count) throw new Error("Index cannot find");
        
        let forward;
        let countIndex = 0;
        let new_node = new Node(value);
        let current = this.head;

        while (current != null){
            countIndex++;

            if(countIndex == index){
                forward = current.next;
                current.next = new_node;
                new_node.next = forward;
            }

            current = current.next;
        }
        this.count++;
    }

    delete(index) {

        if (this.head == null) throw new Error("Linked list is empty!");
        
        if(index<1 || index>this.count) throw new Error("Index cannot find");

        if(index == 1){
            this.head = this.head.next;
            this.count--;
            return;
        }

        let forward;
        let countIndex;

        if(index<this.count){

            countIndex = 0;
            let currentnode = this.head,pree = null;

            while (currentnode.next != null) {
            countIndex++;

            if (countIndex == index-1) pree = currentnode;
            
            if (countIndex == index) {
                forward = currentnode.next;
                pree.next = forward;
            }
            
            currentnode = currentnode.next;
        }

            if(pree == null) this.head =this.head.next;

            this.count--;

        }else {

            let lastnode = this.head,pre2 = null;

            while (lastnode.next != null){
                pre2 = lastnode;
                lastnode = lastnode.next;
            }

            if(pre2 == null){
                this.head = this.head.next;
                this.count--;
                return;
            }

            pre2.next = null;
            this.count--;
        }
    }

    nodes(){
       return this.count;
    }

    headOne(){

         if(this.head == null) throw new Error("Linked list is empty!");
         return this.head.data;
    }

    tail(){

        if(this.head == null) throw new Error("Linked list is empty!");

        let current = this.head;

        while (current.next != null)
            current = current.next;

        return current.data;
    }


    clear(){

        if(this.head == null) throw new Error("Linked list is empty!");

        let current = this.head,pre = null;

        while (current != null) {

            pre = current;
            pre.next = null;
            current = current.next;
        }

        this.head = null;
        this.count = 0;
    }

    indexOf(data){

        let count = -1;
        let current = this.head;

        while (current != null){
            count++;
            if(current.data === data) return count;
            current = current.next;
        }

        return -1;
    }

    toArray(){

        let array = [];
        let current = this.head;

        while (current != null){
           
            array.push(current.data);
            current = current.next;
        }

        return array;
    }

    display(){

        let current = this.head;
        let display = '';
        display+='[';

        while (current !=null){

            if(current.next != null) display+=current.data + ", "; 
            else display+=current.data + "";
            current = current.next;
        }

        display+=']'

        console.log(display);
    }

}

module.exports = LinkedList;

