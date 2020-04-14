package com.jeep.plugin.capacitor.cdssUtils;

import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class JsonIndex {
    private static final String TAG = "JsonIndex";
    private static final List<String> keyIndexesLevel = new ArrayList<String>(
            Arrays.asList("name","column"));
    private String name;
    private String column;
    // Getter
    public String getName() {
        return name;
    }
    public String getColumn() {
        return column;
    }
    public boolean isIndexes(JSONObject jsObj) {
        if(jsObj == null || jsObj.length() == 0) return false;
         Iterator<String> keys = jsObj.keys();
        while(keys.hasNext()) {
            String key = keys.next();
            if(!keyIndexesLevel.contains(key)) return false;
            try {

                Object value = jsObj.get(key);
                if (key.equals("name")) {
                    if (!(value instanceof String)) {
                        return false;
                    } else {
                        name = (String) value;
                    }
                }
                if (key.equals("column")) {
                    if (!(value instanceof String)) {
                        return false;
                    } else {
                        column = (String) value;
                    }
                }
            } catch (JSONException e) {
                e.printStackTrace();
                return false;
            }
        }
        return true;
    }
    public void print() {
        Log.d(TAG, "name: " + this.getName());
        Log.d(TAG, "column: " + this.getColumn());
    }
}