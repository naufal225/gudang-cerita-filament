import tkinter as tk 

root = tk.Tk()
root.title("Aplikasi Biasa")
root.geometry("300x300")

def sapa():
    print("Hello world")
    
label = tk.Label(root, text="Selamat Datang")
label.pack(pady=20)

tombol = tk.Button(root, text="Klik Saya", command=sapa)
tombol.pack()

root.mainloop()