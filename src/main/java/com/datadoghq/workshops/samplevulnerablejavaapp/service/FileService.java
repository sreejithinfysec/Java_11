package com.datadoghq.workshops.samplevulnerablejavaapp.service;

import com.datadoghq.workshops.samplevulnerablejavaapp.exception.FileForbiddenFileException;
import com.datadoghq.workshops.samplevulnerablejavaapp.exception.FileReadException;
import org.springframework.stereotype.Service;

import java.io.*;

@Service
public class FileService {
    final static String ALLOWED_PREFIX = "/tmp/files/";

public String readFile(String path) throws FileForbiddenFileException, FileReadException {
    if(!path.startsWith(ALLOWED_PREFIX)) {
      throw new FileForbiddenFileException("You are not allowed to read " + path);
    }
    try {
      Path filePath = Paths.get(path);
      byte[] bytes = Files.readAllBytes(filePath);
      return new String(bytes);
    } catch (IOException e) {
      throw new FileReadException(e.getMessage());
    }
  }


