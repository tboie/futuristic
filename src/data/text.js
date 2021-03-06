export function getSideText(){
    let text = [];
    text.push("global main");
    text.push("extern printf");
    text.push("");
    text.push("; Using Intel syntax");
    text.push("section .text");
    text.push("");
    text.push("is_palindrome:");
    text.push("  push rbp");
    text.push("     mov rbp, rsp");
    text.push("     ; Input string");
    text.push("     ov rdi, qword [rbp + 24]");
    text.push("     ; Length of string");
    text.push("           mov rdx, qword [rbp + 16]");
    text.push("           ; Length / 2 for easier handling");
    text.push("           mov rcx, rdx");
    text.push("      shr rcx, 1");
    text.push("  mov rax, 1");
    text.push("palindrome_start:");
    text.push("  cmp rcx, 0");
    text.push("       jl palindrome_end");
    text.push("           ; The index is len - idx - 1");
    text.push("           mov rbx, rdx");
    text.push("                 sub rbx, rcx");
    text.push("                 sub rbx, 1");
    text.push("                 mov bl, byte [rdi + rbx]");
    text.push("           cmp byte [rdi + rcx], bl");
    text.push("         jne palindrome_failed");
    text.push("   dec rcx");
    text.push("         jmp palindrome_start");
    text.push("palindrome_failed:");
    text.push("     mov rax, 0");
    text.push("palindrome_end:");
    text.push("   pop rbp");
    text.push("   ret");
    text.push("");
    text.push("global main");
    text.push("extern printf");
    text.push("; Using Intel syntax");
    text.push("     section .text");
    text.push("");
    text.push("is_palindrome:");
    text.push("	    push rbp");
    text.push("	        mov rbp, rsp");
    text.push("	         ; Input string");
    text.push("	         mov rdi, qword [rbp + 24]");
    text.push("	      ; Length of string");
    text.push("	      mov rdx, qword [rbp + 16]");
    text.push("	      ; Length / 2 for easier handling");
    text.push("	          mov rcx, rdx");
    text.push("	          shr rcx, 1");
    text.push("	          mov rax, 1");
    text.push("palindrome_start:");
    text.push("	      cmp rcx, 0");
    text.push("	      jl palindrome_end");
    text.push("	      ; The index is len - idx - 1");
    text.push("	            mov rbx, rdx");
    text.push("	            sub rbx, rcx");
    text.push("	        sub rbx, 1");
    text.push("	    mov bl, byte [rdi + rbx]");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("palindrome_failed:");
    text.push("	      mov rax, 0");
    text.push("palindrome_end:");
    text.push("	      pop rbp");
    text.push("	  ret");
    text.push("");
    text.push("printnum:");
    text.push("	      push rbp");
    text.push("	      mov rbp, rsp");
    text.push("	          sub rsp, 8");
    text.push("	          mov rsi, rdi");
    text.push("	          mov rdi, message");
    text.push("	      mov qword [rbp - 8], 0");
    text.push("	mov al, 0");
    text.push("	call printf");
    text.push("	mov rsi, 0");
    text.push("	mov rax, rsi");
    text.push("	    add rsp, 8");
    text.push("	    pop rbp");
    text.push("	ret");
    text.push("");
    text.push("main:");
    text.push("	    ; Pass the values through the stack");
    text.push("	        push qword input");
    text.push("	        push qword [len]");
    text.push("	call is_palindrome");
    text.push("	     ; Restore pushed values");
    text.push("	      add rsp, 16");
    text.push("	      mov rdi, rax");
    text.push("	  call printnum");
    text.push("	ret");
    text.push("");
    text.push("     section .data");
    text.push("");
    text.push("     global main");
    text.push("	extern printf");
    text.push("	        section .text");
    text.push("     rle_start:");
    text.push("	    default rel");
    text.push("	          mov rax, arr");
    text.push("rle_loop:");
    text.push("	        mov bl, [rax]");
    text.push("	        mov [chr], bl");
    text.push("	   cmp byte [chr], 0");
    text.push("	jle rle_end");
    text.push("	add rax, 2");
    text.push("	mov bl, [rax]");
    text.push("	    add rax, 2");
    text.push("	        mov [reps], bl");
    text.push("	        sub byte [reps], 48");
    text.push("      rle_repeat:");
    text.push("	            cmp byte [reps], 0");
    text.push("	               jle rle_loop");
    text.push("	                    mov rcx, [output_offset]");
    text.push("	                mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	            mov [rsi + rcx], bl");
    text.push("	      add qword [output_offset], 1");
    text.push("	sub byte [reps], 1");
    text.push("	      jmp rle_repeat");
    text.push("rle_end:");
    text.push("ret");
    text.push("");
    text.push("");
    text.push("; Prints the string stored");
    text.push("; in rdi register");
    text.push("       printstr:");
    text.push("	            mov rsi, rax");
    text.push("	            mov rdi, message ; Pass format");
    text.push("	            mov rax, 0");
    text.push("	      call printf");
    text.push("	ret");
    text.push("");
    text.push("main:");
    text.push("	    call rle_start");
    text.push("	          mov rax, result");
    text.push("	     call printstr");
    text.push("	ret");
    text.push("");
    text.push("	section .data");
    text.push("");
    text.push(" return text;");
  
    return text;
}

export function getMainText(){
    let text = [];
    text.push("global main");
    text.push("extern printf");
    text.push("");
    text.push("; Using Intel syntax");
    text.push("section .text");
    text.push("");
    text.push("is_palindrome:");
    text.push("  push rbp");
    text.push("     mov rbp, rsp");
    text.push("     ; Input string");
    text.push("	            mov rbx, rdx");
    text.push("	            sub rbx, rcx");
    text.push("	        sub rbx, 1");
    text.push("                 mov rbp, rsp");
    text.push("                     ; Input string");
    text.push("                             ov rdi, qword [rbp + 24]");
    text.push("                                     mov rdx, qword [rbp + 16]");
    text.push("	                            sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                 jle rle_loop");
    text.push("	    mov bl, byte [rdi + rbx]");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("     ov rdi, qword [rbp + 24]");
    text.push("     ; Length of string");
    text.push("           mov rdx, qword [rbp + 16]");
    text.push("           ; Length / 2 for easier handling");
    text.push("	                    sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                                jle rle_loop");
    text.push("	                    mov rcx, [output_offset]");
    text.push("	                mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	            mov [rsi + rcx], bl");
    text.push("	      add qword [output_offset], 1");
    text.push("	sub byte [reps], 1");
    text.push("	      jmp rle_repeat");
    text.push("           mov rcx, rdx");
    text.push("      shr rcx, 1");
    text.push("  mov rax, 1");
    text.push("palindrome_start:");
    text.push("  cmp rcx, 0");
    text.push("       jl palindrome_end");
    text.push("           ; The index is len - idx - 1");
    text.push("           mov rbx, rdx");
    text.push("                 sub rbx, rcx");
    text.push("                 sub rbx, 1");
    text.push("                 mov bl, byte [rdi + rbx]");
    text.push("           cmp byte [rdi + rcx], bl");
    text.push("         jne palindrome_failed");
    text.push("   dec rcx");
    text.push("         jmp palindrome_start");
    text.push("palindrome_failed:");
    text.push("     mov rax, 0");
    text.push("palindrome_end:");
    text.push("   pop rbp");
    text.push("   ret");
    text.push("");
    text.push("global main");
    text.push("extern printf");
    text.push("; Using Intel syntax");
    text.push("     section .text");
    text.push("");
    text.push("is_palindrome:");
    text.push("	    push rbp");
    text.push("	        mov [reps], bl");
    text.push("	        sub byte [reps], 48");
    text.push("      rle_repeat:");
    text.push("	            cmp byte [reps], 0");
    text.push("	               jle rle_loop");
    text.push("	                        mov rcx, [output_offset]");
    text.push("	                mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	                mov [rsi + rcx], bl");
    text.push("	                        add qword [output_offset], 1");
    text.push("	                        sub byte [reps], 1");
    text.push("	            mov rbp, rsp");
    text.push("	         mov rdi, qword [rbp + 24]");
    text.push("	      ; Length of string");
    text.push("	            mov rdx, qword [rbp + 16]");
    text.push("	      ; Length / 2 for easier handling");
    text.push("	          mov rcx, rdx");
    text.push("	          shr rcx, 1");
    text.push("	          mov rax, 1");
    text.push("	            mov rbx, rdx");
    text.push("	            sub rbx, rcx");
    text.push("	        sub rbx, 1");
    text.push("                 mov rbp, rsp");
    text.push("                     ; Input string");
    text.push("                             ov rdi, qword [rbp + 24]");
    text.push("                             mov rdx, qword [rbp + 16]");
    text.push("	                            sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                 jle rle_loop");
    text.push("	    mov bl, byte [rdi + rbx]");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("palindrome_failed:");
    text.push("	      mov rax, 0");
    text.push("palindrome_end:");
    text.push("	      pop rbp");
    text.push("	                mov bl, [rax]");
    text.push("	                        add rax, 2");
    text.push("	                        mov [reps], bl");
    text.push("	                                sub byte [reps], 48");
    text.push("                         rle_repeat:");
    text.push("	                    cmp byte [reps], 0");
    text.push("	            mov rbx, rdx");
    text.push("	            sub rbx, rcx");
    text.push("	    mov bl, byte [rdi + rbx]");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("     ov rdi, qword [rbp + 24]");
    text.push("     ; Length of string");
    text.push("           mov rdx, qword [rbp + 16]");
    text.push("           ; Length / 2 for easier handling");
    text.push("	                    sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                                jle rle_loop");
    text.push("	                    mov rcx, [output_offset]");
    text.push("	                mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	            mov [rsi + rcx], bl");
    text.push("	                    sub rbx, 1");
    text.push("                             mov rbp, rsp");
    text.push("                                 ; Input string");
    text.push("                                         ov rdi, qword [rbp + 24]");
    text.push("                                         mov rdx, qword [rbp + 16]");
    text.push("	                                sub byte [reps], 48");
    text.push("                             rle_repeat:");
    text.push("	                     cmp byte [reps], 0");
    text.push("	           jle rle_loop");
    text.push("	    mov bl, byte [rdi + rbx]");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("	               jle rle_loop");
    text.push("	                    mov rcx, [output_offset]");
    text.push("	                        mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	            mov [rsi + rcx], bl");
    text.push("	      push rbp");
    text.push("	                mov rbp, rsp");
    text.push("	                         sub rsp, 8");
    text.push("	                            mov rsi, rdi");
    text.push("	                          mov rdi, message");
    text.push("	                mov qword [rbp - 8], 0");
    text.push("	        mov al, 0");
    text.push("	call printf");
    text.push("	mov rsi, 0");
    text.push("	mov rax, rsi");
    text.push("	    add rsp, 8");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("     ov rdi, qword [rbp + 24]");
    text.push("           mov rdx, qword [rbp + 16]");
    text.push("	                    sub byte [reps], 48");
    text.push("                             rle_repeat:");
    text.push("	                                    cmp byte [reps], 0");
    text.push("	                                        jle rle_loop");
    text.push("	                    mov rcx, [output_offset]");
    text.push("	                mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	            mov [rsi + rcx], bl");
    text.push("	      add qword [output_offset], 1");
    text.push("	    pop rbp");
    text.push("	      add qword [output_offset], 1");
    text.push("	sub byte [reps], 1");
    text.push("palindrome_start:");
    text.push("	      cmp rcx, 0");
    text.push("	      jl palindrome_end");
    text.push("	      ; The index is len - idx - 1");
    text.push("	            mov rbx, rdx");
    text.push("	            sub rbx, rcx");
    text.push("	        sub rbx, 1");
    text.push("	            mov rbx, rdx");
    text.push("	            sub rbx, rcx");
    text.push("	        sub rbx, 1");
    text.push("                 mov rbp, rsp");
    text.push("                     ; Input string");
    text.push("                             ov rdi, qword [rbp + 24]");
    text.push("                             mov rdx, qword [rbp + 16]");
    text.push("	                            sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                 jle rle_loop");
    text.push("	    mov bl, byte [rdi + rbx]");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("palindrome_failed:");
    text.push("	      mov rax, 0");
    text.push("palindrome_end:");
    text.push("	      pop rbp");
    text.push("                 mov rbp, rsp");
    text.push("                     ; Input string");
    text.push("                             ov rdi, qword [rbp + 24]");
    text.push("                             mov rdx, qword [rbp + 16]");
    text.push("	                            sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                 jle rle_loop");
    text.push("	    mov bl, byte [rdi + rbx]");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("palindrome_failed:");
    text.push("	      mov rax, 0");
    text.push("palindrome_end:");
    text.push("	      pop rbp");
    text.push("	  ret");
    text.push("");
    text.push("printnum:");
    text.push("	      push rbp");
    text.push("	      mov rbp, rsp");
    text.push("	          sub rsp, 8");
    text.push("                     mov rbx, rdx");
    text.push("                             sub rbx, rcx");
    text.push("                                     sub rbx, 1");
    text.push("                             mov bl, byte [rdi + rbx]");
    text.push("                     cmp byte [rdi + rcx], bl");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("     ov rdi, qword [rbp + 24]");
    text.push("     ; Length of string");
    text.push("           mov rdx, qword [rbp + 16]");
    text.push("	                    sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                                jle rle_loop");
    text.push("	                    mov rcx, [output_offset]");
    text.push("	                mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	            mov [rsi + rcx], bl");
    text.push("	                    add qword [output_offset], 1");
    text.push("           jne palindrome_failed");
    text.push("             dec rcx");
    text.push("         jmp palindrome_start");
    text.push("palindrome_failed:");
    text.push("     mov rax, 0");
    text.push("palindrome_end:");
    text.push("   pop rbp");
    text.push("	          mov rsi, rdi");
    text.push("	          mov rdi, message");
    text.push("	      mov qword [rbp - 8], 0");
    text.push("	mov al, 0");
    text.push("	call printf");
    text.push("	mov rsi, 0");
    text.push("	mov rax, rsi");
    text.push("	    add rsp, 8");
    text.push("	    pop rbp");
    text.push("	ret");
    text.push("");
    text.push("main:");
    text.push("	    ; Pass the values through the stack");
    text.push("	        push qword input");
    text.push("	        push qword [len]");
    text.push("	call is_palindrome");
    text.push("	     ; Restore pushed values");
    text.push("	      add rsp, 16");
    text.push("	      mov rdi, rax");
    text.push("	    mov bl, byte [rdi + rbx]");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("     ov rdi, qword [rbp + 24]");
    text.push("     ; Length of string");
    text.push("           mov rdx, qword [rbp + 16]");
    text.push("           ; Length / 2 for easier handling");
    text.push("	                    sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                                jle rle_loop");
    text.push("	                    mov rcx, [output_offset]");
    text.push("	                mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	            mov [rsi + rcx], bl");
    text.push("	  call printnum");
    text.push("	ret");
    text.push("");
    text.push("     section .data");
    text.push("");
    text.push("     global main");
    text.push("	extern printf");
    text.push("	        section .text");
    text.push("     rle_start:");
    text.push("	    default rel");
    text.push("	          mov rax, arr");
    text.push("rle_loop:");
    text.push("	        mov bl, [rax]");
    text.push("	        mov [chr], bl");
    text.push("	   cmp byte [chr], 0");
    text.push("	jle rle_end");
    text.push("	add rax, 2");
    text.push("	mov bl, [rax]");
    text.push("	    add rax, 2");
    text.push("	        mov [reps], bl");
    text.push("	        sub byte [reps], 48");
    text.push("      rle_repeat:");
    text.push("	            cmp byte [reps], 0");
    text.push("	               jle rle_loop");
    text.push("	                    mov rcx, [output_offset]");
    text.push("	                mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	            mov [rsi + rcx], bl");
    text.push("	      add qword [output_offset], 1");
    text.push("	sub byte [reps], 1");
    text.push("	      jmp rle_repeat");
    text.push("rle_end:");
    text.push("ret");
    text.push("");
    text.push("");
    text.push("; Prints the string stored");
    text.push("; in rdi register");
    text.push("       printstr:");
    text.push("	            mov rsi, rax");
    text.push("	      push rbp");
    text.push("	      mov rbp, rsp");
    text.push("	          sub rsp, 8");
    text.push("                     mov rbx, rdx");
    text.push("                             sub rbx, rcx");
    text.push("                                     sub rbx, 1");
    text.push("                             mov bl, byte [rdi + rbx]");
    text.push("                     cmp byte [rdi + rcx], bl");
    text.push("	                                cmp byte [rdi + rcx], bl");
    text.push("	                                    jne palindrome_failed");
    text.push("	                                dec rcx");
    text.push("	                                        jmp palindrome_start");
    text.push("                                 ov rdi, qword [rbp + 24]");
    text.push("                 mov rdx, qword [rbp + 16]");
    text.push("	                    sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                                jle rle_loop");
    text.push("	                    mov rcx, [output_offset]");
    text.push("	                mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	            mov [rsi + rcx], bl");
    text.push("	            mov rdi, message ; Pass format");
    text.push("	            mov rax, 0");
    text.push("	      call printf");
    text.push("	ret");
    text.push("");
    text.push("main:");
    text.push("	    call rle_start");
    text.push("	          mov rax, result");
    text.push("	     call printstr");
    text.push("	ret");
    text.push("");
    text.push("	section .data");
    text.push("");
    text.push(" return text;");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("     ov rdi, qword [rbp + 24]");
    text.push("           mov rdx, qword [rbp + 16]");
    text.push("	                    sub byte [reps], 48");
    text.push("                             rle_repeat:");
    text.push("	                                    cmp byte [reps], 0");
    text.push("	                                        jle rle_loop");
    text.push("	                    mov rcx, [output_offset]");
    text.push("	                mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	            mov [rsi + rcx], bl");
    text.push("	      add qword [output_offset], 1");
    text.push("	    pop rbp");
    text.push("	      add qword [output_offset], 1");
    text.push("	sub byte [reps], 1");
    text.push("palindrome_start:");
    text.push("	      cmp rcx, 0");
    text.push("	      jl palindrome_end");
    text.push("	      ; The index is len - idx - 1");
    text.push("	            mov rbx, rdx");
    text.push("	            sub rbx, rcx");
    text.push("	        sub rbx, 1");
    text.push("                 mov rbp, rsp");
    text.push("                     ; Input string");
    text.push("                             ov rdi, qword [rbp + 24]");
    text.push("                             mov rdx, qword [rbp + 16]");
    text.push("	                            sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                 jle rle_loop");
    text.push("	    mov bl, byte [rdi + rbx]");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("palindrome_failed:");
    text.push("	      mov rax, 0");
    text.push("palindrome_end:");
    text.push("	      pop rbp");
    text.push("	  ret");
    text.push("");
    text.push("printnum:");
    text.push("	      push rbp");
    text.push("	      mov rbp, rsp");
    text.push("	          sub rsp, 8");
    text.push("                     mov rbx, rdx");
    text.push("                             sub rbx, rcx");
    text.push("                                     sub rbx, 1");
    text.push("                             mov bl, byte [rdi + rbx]");
    text.push("                     cmp byte [rdi + rcx], bl");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("     ov rdi, qword [rbp + 24]");
    text.push("     ; Length of string");
    text.push("           mov rdx, qword [rbp + 16]");
    text.push("	                    sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                                jle rle_loop");
    text.push("	                    mov rcx, [output_offset]");
    text.push("	                mov rsi, result");
    text.push("                 text.push(	mov bl, [chr]");
    text.push("	            mov [rsi + rcx], bl");
    text.push("	                    add qword [output_offset], 1");
    text.push("           jne palindrome_failed");
    text.push("             dec rcx");
    text.push("         jmp palindrome_start");
    text.push("palindrome_failed:");
    text.push("     mov rax, 0");
    text.push("palindrome_end:");
    text.push("   pop rbp");
    text.push("	          mov rsi, rdi");
    text.push("	          mov rdi, message");
    text.push("	      mov qword [rbp - 8], 0");
    text.push("	            mov rbx, rdx");
    text.push("	            sub rbx, rcx");
    text.push("	        sub rbx, 1");
    text.push("                 mov rbp, rsp");
    text.push("                     ; Input string");
    text.push("                             ov rdi, qword [rbp + 24]");
    text.push("                             mov rdx, qword [rbp + 16]");
    text.push("	                            sub byte [reps], 48");
    text.push("                     rle_repeat:");
    text.push("	                            cmp byte [reps], 0");
    text.push("	                 jle rle_loop");
    text.push("	    mov bl, byte [rdi + rbx]");
    text.push("	cmp byte [rdi + rcx], bl");
    text.push("	          jne palindrome_failed");
    text.push("	          dec rcx");
    text.push("	              jmp palindrome_start");
    text.push("palindrome_failed:");
    text.push("	      mov rax, 0");
    text.push("palindrome_end:");
    text.push("	      pop rbp");
  
    return text;
}