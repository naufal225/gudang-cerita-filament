import tkinter as tk

root = tk.Tk()
root.title("Contoh Layout Place")
root.geometry("400x300")

label1 = tk.Label(root, text="Koordinat absolute (20,20)", bg="yellow")
label1.place(x=20,y=20)

label2 = tk.Label(root, text="Label relatif", bg="cyan")
label2.place(relx=0.5,rely=0.5,anchor="center")

btn = tk.Button(root, text="Tombol relatif")
btn.place(relx=0.1,rely=0.8,relwidth=0.8,height=40)

root.mainloop()