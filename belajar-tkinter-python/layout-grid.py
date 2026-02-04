import tkinter as tk

root = tk.Tk()
root.title("Formulir Login")
root.geometry("300x150")

label_user = tk.Label(root, text="Username: ")
label_user.grid(row=0,column=0,padx=10,pady=10,sticky="w")

entry_user = tk.Entry(root)
entry_user.grid(row=0,column=1,padx=10,pady=10)

label_pass = tk.Label(root, text="Password: ")
label_pass.grid(row=1,column=0,padx=10,pady=10,sticky="w")

entry_pass = tk.Entry(root)
entry_pass.grid(row=1,column=1,padx=10,pady=10)

root.mainloop()