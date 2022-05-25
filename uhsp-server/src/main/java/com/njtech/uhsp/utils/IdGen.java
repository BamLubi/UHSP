package com.njtech.uhsp.utils;

@FunctionalInterface
public interface IdGen<T> {
    T genId();
}
