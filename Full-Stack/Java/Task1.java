public class Task1 {
    public static void main(String[] args) {
        
        Thread threadA = new Thread(() -> {
            for (int i = 10; i >= 1; i--) {
                System.out.println(i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    System.err.println("Thread A was interrupted: " + e.getMessage());
                    Thread.currentThread().interrupt();
                    return;
                }
            }
        });

       
        Thread threadB = new Thread(() -> {
            try {
             
                threadA.join();
                System.out.println("Blast Off");
            } catch (InterruptedException e) {
                System.err.println("Thread B was interrupted: " + e.getMessage());
                Thread.currentThread().interrupt();
            }
        });

    
        threadA.start();
        threadB.start();
    }
}
